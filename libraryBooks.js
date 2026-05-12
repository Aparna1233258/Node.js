const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const books = [
  { title: "Java Basics", author: "John", location: "Shelf A" },
  { title: "Node.js Guide", author: "Dean", location: "Shelf B" },
  { title: "Python 101", author: "Deepak", location: "Shelf D" },
  { title: "C++ Mastery", author: "Dean", location: "Shelf C" },
  { title: "Data Structures", author: "Ravi", location: "Shelf B" },
  { title: "React Handbook", author: "Derek", location: "Shelf D" }
];

async function run() {

    try {

        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db("mashupdb");
        const collection = db.collection("books");

        await collection.insertMany(books);

        console.log("Books inserted");

        await collection.updateOne(
            { title: "Java Basics" },
            {
                $set: {
                    location: "Shelf Z"
                }
            }
        );

        console.log("Java Basics updated");

        await collection.updateMany(
            { author: "Dean" },
            {
                $set: {
                    location: "Shelf E"
                }
            }
        );

        console.log("Dean books updated");

        await collection.deleteOne(
            { title: "Python 101" }
        );

        console.log("Python 101 deleted");

        await collection.deleteMany(
            { title: /^D/ }
        );

        console.log("Books starting with D deleted");


        const finalBooks = await collection.find().toArray();

        console.log("\nFinal Books Collection:");
        console.log(finalBooks);

    }

    catch (err) {
        console.log(err);
    }

    finally {

        // Close connection
        await client.close();
    }
}

run();