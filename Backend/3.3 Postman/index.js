import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  const name = req.body;
  res.send(`The name is: ${name}`);
  // res.sendStatus(201);
});

app.put("/user/Akash", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/Akash", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/Akash", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
