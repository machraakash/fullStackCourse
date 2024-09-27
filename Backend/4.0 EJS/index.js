import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5500;

const d = new Date();
var day = d.getDay();
var advice;
if(day == 0 || day == 6){
    advice = "Its the weekend, kick some ass!!!";
}else{
    advice = "Its a workday, time to get to work!!!"
};

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", {advice});
});

app.listen(5500, ()=>{
    console.log(`The application is running on port ${port}`);
});