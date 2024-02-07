//In express.js , express.Router() is a mini Express application without all the server configuration but with the ability to define routes , middleware , and even have its own set of route handlers . It allows us to modularize our routes and middleware to keep our code organized and maintainable

//Use the express.Router class to create modular,mountable route handlers . A Router instance is complete middleware and routing system ; for this reason it ois often reffered to as a "mini-app"

// app.use(express.json()) --> This line of code adds express middleware that parses incoming  requests bodies with JSON payloads . It's important to place this before any routes that needed to handle JSON data in the requests body . This middleware is responsible for parsing JSON data from requests , and it should be applied ata the beginning of our middleware stack to ensure it's available for all subsequent route handlers .
require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

const app = express();

app.use(express.json());
app.use("/api/auth", router);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT} `);
  });
});
