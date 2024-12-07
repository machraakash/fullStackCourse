import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { bookData: null, currentError: null});
});

app.post("/submit", async (req, res) => {
    try {
        const isbn = req.body["book_isbn"];
        const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=${isbn}&format=json&jscmd=viewapi`);
        const bookData = response.data;
        console.log(bookData);
        res.redirect(bookData[isbn].preview_url);
    } catch (error) {
        console.error("failed to make a get request: ", error.message);
        res.render("index.ejs", { bookData: null, currentError: error.message });
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});