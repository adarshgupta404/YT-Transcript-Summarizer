const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();
const axios = require("axios");

const options = {
  method: "POST",
  url: "https://youtube-summary-multilanguage.p.rapidapi.com/summarize/long/gpt-3.5-turbo-16k",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "youtube-summary-multilanguage.p.rapidapi.com",
  },
};

app.post("/getSummary", async (req, res) => {
  const url = req.body.url;
  const restdata = {
    url: url,
    lang: "en",
  };

  // Merge options and restdata using the spread operator
  const requestData = {
    ...options,
    data: restdata,
  };
  axios(requestData)
  .then(response => {
    // console.log('Response:', response.data.summary.text);
    res.send({data:response.data.summary.text})
    // Handle the response here
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors here
  });
  
});
app.get('/', (req, res)=>{
  res.send("<h1>Welcome to the backend of YTS</h1>")
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
