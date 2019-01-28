const express = require("express");
const { ObjectID } = require("mongodb");
const _ = require("lodash");


const { Todo } = require("../models/todo");
const { authenticate } = require("../middleware/authenticate");
const todosRouter = express.Router();

todosRouter.get("/", authenticate, async (req, res) => {
  try {
    const todos = await Todo.find({
      _creator: req.user._id
    });
    res.send({ todos });
  } catch (e) {
    res.status(400).send(e);
  }
});

todosRouter.post("/", authenticate, async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    _creator: req.user._id
  });

  try {
    const doc = await todo.save();

    res.status(201).send(doc);
  } catch (e) {
    res.status(400).send(e);
  }
});

todosRouter.get("/:id", authenticate, async (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  try {
    const todo = await Todo.findOne({
      _id: id,
      _creator: req.user._id
    });

    if (!todo) {
      return res.status(404).send();
    }

    res.send({ todo });
  } catch (e) {
    res.status(400).send(e);
  }
});

todosRouter.delete("/:id", authenticate, async (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  try {
    const todo = await Todo.findOneAndRemove({
      _id: id,
      _creator: req.user._id
    });

    if (!todo) {
      return res.status(404).send();
    }

    res.send({ todo });
  } catch (e) {
    res.status(400).send(e);
  }
});

todosRouter.patch("/:id", authenticate, async (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  try {
    const todo = await Todo.findOneAndUpdate(
      {
        _id: id,
        _creator: req.user._id
      },
      {
        $set: body
      },
      { new: true }
    );
    if (!todo) {
      return res.status(404).send();
    }

    res.send({ todo });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = {
  todosRouter
};
