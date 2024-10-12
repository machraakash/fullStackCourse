import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/edit", (req, res) => {
  res.render("edit.ejs");
});

app.get("/read", (req, res) => {
  res.render("read.ejs");
});

// app.post("/submit", (req, res) => {
//   res.render("index.ejs", {wordLength: req.body["fName"]});
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});