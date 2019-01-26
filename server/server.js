const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  console.log(req.body);
  const todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then(doc => {
      res.status(201).send(doc);
    })
    .catch(e => {
      console.log(e);

      res.status(400).send(e);
    });
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});
