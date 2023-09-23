const express = require("express");
const router = express.Router();

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
  messages.forEach((message) => {
    message.formattedAdded = new Date(message.added).toLocaleString();
  });

  res.render("index", { title: "Message Board", messages: messages });
});

router.post("/new", function (req, res, next) {
  const message = req.body.text;
  const user = req.body.user;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
