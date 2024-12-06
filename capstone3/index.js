import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// const API_URL = "https://secrets-api.appbrewery.com";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/api", async (req, res) => {
    try {
        const response = await axios.get("https://openlibrary.org/api/books?bibkeys=ISBN%3A0451526996&format=json&jscmd=viewapi");
        const bookData = response.data;
        console.log(bookData);
        res.render("index.ejs", { bookData });
    } catch (error) {
        console.error("failed to make a get request: ", error.message);
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});