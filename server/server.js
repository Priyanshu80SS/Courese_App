const express = require("express");

const app = express();

app.get("/", (req, resp) => {
  resp.status(200).send("this is my home page");
});

app.get("/register", (req, resp) => {
  resp.status(200).send("this is my register page ");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
