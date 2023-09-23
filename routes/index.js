const express = require("express");
const router = express.Router();

router.post("/new", function (req, res, next) {
  const message = req.body.message;
  const user = req.body.user;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

module.exports = router;
