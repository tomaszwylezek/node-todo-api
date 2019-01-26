const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");
    //
    // db.collection("Todos")
    //   .find({
    //     _id: ObjectID("5c4c780f630cb5c12f59b10a")
    //   })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );

    //
    // db.collection("Todos")
    //   .find({
    //     _id: ObjectID("5c4c780f630cb5c12f59b10a")
    //   })
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count:${count}`);
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );


    db.collection("Users")
      .find({
        name: 'Andrew'
      })
      .toArray()
      .then(
        users => {
                console.log(JSON.stringify(users, undefined, 2));
        },
        err => {
          console.log("Unable to fetch todos", err);
        }
      );

    client.close();
  }
);
