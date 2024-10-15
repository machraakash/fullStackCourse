import express from "express";
import { writeFile } from 'node:fs';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

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

app.post("/newBlog", (req, res) => {
  console.log(req.body);
  res.render("read.ejs", {blogTitle: req.body.blogTitle, blogText: req.body.blogText,})
});

// "read.ejs", {blogTitle: body.}
// writdeFile('newBlog.txt', 'Hello Node.js', 'utf8', callback);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});