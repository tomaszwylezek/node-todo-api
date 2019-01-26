const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");

    // db.collection("Todos")
    //   .deleteMany({ text: "eat lunch" })
    //   .then((res) => {
    //     console.log(res);
    //   });

    // db.collection("Todos")
    //   .deleteOne({ text: "eat lunch" })
    //   .then((res) => {
    //     console.log(res);
    //   });

    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then((res) => {
    //     console.log(res);
    //   });

    // db.collection("Users")
    //   .deleteMany({ name: 'Andrew' })
    //   .then((res) => {
    //     console.log(res);
    //   });

    // db.collection("Users")
    //   .findOneAndDelete({ _id: ObjectID('a23bca2429729cef32') })
    //   .then((res) => {
    //     console.log(res);
    //   });


    client.close();
  }
);
