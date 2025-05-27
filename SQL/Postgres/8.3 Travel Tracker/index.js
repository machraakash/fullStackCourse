import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Akash",
  password: "Postgres",
  port: 5432,
});
const app = express();
const port = 3000;

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log("Received country input:", input);

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1",
      [input]
    );

    console.log("Query result for country_code:", result.rows);

    if (result.rows.length !== 0) {
      const countryCode = result.rows[0].country_code;
      console.log("Inserting country_code into visited_countries:", countryCode);

      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );

      console.log("Insert successful");
    } else {
      console.log("No matching country found");
    }

    res.redirect("/");
  } catch (error) {
    console.error("FULL ERROR in /add route:\n", error); // Log full error
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
