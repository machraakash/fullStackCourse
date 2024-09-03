import express from "express";
const app = express();
const port = 5500;

app.listen(3000, ()=> {
    console.log(`Server running on port ${port}.`);
} )