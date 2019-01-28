const { ObjectID } = require("mongodb");
const { setupDatabase } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

setupDatabase();

Todo.remove({}).then(result => {
  console.log(result);
});

Todo.findOneAndRemove().then();
Todo.findByIdAndRemove("5c4d9f9fb37af1d3eb9d43b7").then(todo => {
  console.log(todo);
});
