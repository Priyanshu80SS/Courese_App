//In express.js , express.Router() is a mini Express application without all the server configuration but with the ability to define routes , middleware , and even have its own set of route handlers . It allows us to modularize our routes and middleware to keep our code organized and maintainable

//Use the express.Router class to create modular,mountable route handlers . A Router instance is complete middleware and routing system ; for this reason it ois often reffered to as a "mini-app"

const express = require("express");
const router = require("./router/auth-router");

const app = express();

app.use("/api/auth", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
