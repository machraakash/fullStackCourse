import express from "express";
const app = express();
const port = 5500;

app.get("/", (req, res) => {
    res.send("<h1>Hello.</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Blazers.com</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Innocent-America.com</h1>");
});

app.post("/", (req, res) => {
    res.sendStatus(201);
});

app.put("/", (req, res) => {
    res.sendStatus(200);
})

app.patch("/", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () =>{
    console.log(`The port is running at ${port}`);
});