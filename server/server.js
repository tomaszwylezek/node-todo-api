require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");

const { setupDatabase } = require("./db/mongoose");
const { todosRouter } = require("./routes/todos");
const { usersRouter } = require("./routes/users");

setupDatabase();

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/todos', todosRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {
  app
};
