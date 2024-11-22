import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "AMachra";
const yourPassword = "secretsAPI";
const yourAPIKey = "cfffe760-dea4-4b7b-91d6-3325cc8512cc";
const yourBearerToken = "b7e88f3b-8522-4d5d-bd28-6197f6a0e237";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try{
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content : result});
  }catch(error){
    console.error("Random Not Working.", error.message);
  }
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async(req, res) => {
  try{
  const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
    auth: {
      username: "AMachra",
      password: "secretsAPI",
    },
  });
  const result = JSON.stringify(response.data);
    res.render("index.ejs", {content : result});
  }catch(error){
    console.error("/ALL endpoint authentication not Working.", error.message);
  }});
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
   

app.get("/apiKey", async(req, res) => {
  try{
    const response = await axios.get("https://secrets-api.appbrewery.com/filter?score=5&apiKey=cfffe760-dea4-4b7b-91d6-3325cc8512cc");
    const result = JSON.stringify(response.data);
      res.render("index.ejs", {content : result});
    }catch(error){
      console.error("/Filter endpoint authorization not Working.", error.message);
    }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async(req, res) => {
  try{
    const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", { headers: {"Authorization" : "Bearer b7e88f3b-8522-4d5d-bd28-6197f6a0e237"} });
    const result = JSON.stringify(response.data);
      res.render("index.ejs", {content : result});
    }catch(error){
      console.error("/Secrets endpoint authentication not Working.", error.message);
    }
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
