const { ObjectID } = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

const id = "5c4cc862c55e50cd3d477dcb";

if (!ObjectID.isValid(id)) {
  console.log("Id not valid");
}

Todo.find({ _id: id }).then(todos => {
  console.log("Todos", todos);
});

Todo.findOne({ _id: id }).then(todo => {
  console.log("Todo", todo);
});

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todo by id", todo);
  })
  .catch(e => console.log(e));

const userId = "5c4c8317e4a9ddc6ed27a3df";

User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log("Id not found");
    }
    console.log("User by id", user);
  })
  .catch(e => console.log(e));
