const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", function (req, res, next) {
  res.render("index", { message: "Ett meddelande" });
});

router.post("/", function (req, res, next) {
  var message = req.body["message"];

  fetch(
    encodeURI("http://192.168.1.149:5005/Gästrum/say/" + message + "/sv/40")
  ).then((x) => {
    res.redirect("/");
  });
});

module.exports = router;
