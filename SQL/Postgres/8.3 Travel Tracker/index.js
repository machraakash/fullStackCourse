import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "akash",
  password: "postgres23579",
  port: 5432,
});
const app = express();
const port = 3000;

db.connect();

db.query("SELECT * FROM visited_countries", (err, res) => {
  if(err){
    console.error("ERROR EXECUTING QUERY", err.stack);
  }else{
    console.log("Countries Visited:", res.rows);
  }
  db.end();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
