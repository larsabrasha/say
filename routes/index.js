const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", function (req, res, next) {
  const message = req.query.message;

  var isValidTime = validateTime();

  res.render("index", {
    message: message != null ? message : "",
    isValidTime: isValidTime,
  });
});

router.post("/", function (req, res, next) {
  var message = req.body["message"];

  console.log("Sent message:", message);

  var isValidTime = validateTime();
  if (isValidTime) {
    fetch(
      encodeURI("http://192.168.1.149:5005/Gästrum/say/" + message + "/sv/40")
    );
  }

  res.redirect("?message=" + message);
});

function validateTime() {
  var date = new Date();
  var current_day = date.getUTCDay();
  var current_hour = date.getUTCHours();

  return (
    current_day != 0 &&
    current_day != 6 &&
    current_hour >= 7 &&
    current_hour < 14
  );
}

module.exports = router;
