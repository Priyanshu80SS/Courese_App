const express = require("express");

const router = express();

router.route("/").get((req, resp) => {
  resp.status(200).send("this is my home page");
});

router.route("/register").get((req, resp) => {
  resp.status(200).send("this is my registartion page");
});

module.exports = router;
