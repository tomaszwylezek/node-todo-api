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
    //   .findOneAndUpdate(
    //     { _id: ObjectID("5c4c780f630cb5c12f59b10a") },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     { returnOriginal: false }
    //   )
    //   .then(res => {
    //     console.log(res);
    //   });

    db.collection("Users")
      .findOneAndUpdate(
        { name: 'Tomek' },
        {
          $inc: {
            age: 1
          },
          $set: {
            name: 'Tomek'
          }
        },
        { returnOriginal: false }
      )
      .then(res => {
        console.log(res);
      });

    client.close();
  }
);
