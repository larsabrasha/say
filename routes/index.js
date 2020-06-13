const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", function (req, res, next) {
  const message = req.query.message;
  console.log(message);
  res.render("index", { message: message != null ? message : "" });
});

router.post("/", function (req, res, next) {
  var message = req.body["message"];

  fetch(
    encodeURI("http://192.168.1.149:5005/Gästrum/say/" + message + "/sv/40")
  );

  res.redirect("?message=" + message);
});

module.exports = router;
