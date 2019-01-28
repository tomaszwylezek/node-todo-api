const express = require("express");
const { ObjectID } = require("mongodb");
const _ = require("lodash");


const { User } = require("../models/user");
const { authenticate } = require("../middleware/authenticate");
const usersRouter = express.Router();


usersRouter.post("/", async (req, res) => {
  try {
    const body = _.pick(req.body, ["email", "password"]);
    const user = new User(body);
    await user.save();
    const token = await user.generateAuthToken();
    res.header("x-auth", token).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

usersRouter.get("/me", authenticate, (req, res) => {
  res.send(req.user);
});

usersRouter.post("/login", async (req, res) => {
  try {
    const body = _.pick(req.body, ["email", "password"]);
    const user = await User.findByCredentials(body.email, body.password);
    const token = await user.generateAuthToken();
    res.header("x-auth", token).send(user);
  } catch (e) {
    res.status(400).send();
  }
});

usersRouter.delete("/me/token", authenticate, async (req, res) => {
  try {
    await req.user.removeToken(req.token);
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  }
});


module.exports = {
  usersRouter
};
