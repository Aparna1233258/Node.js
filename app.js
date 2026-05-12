const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

async function run() {

    try {

        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db("mashupdb");

        const collection = db.collection("leads");

        await collection.insertMany([
            { name: "Arjun", city: "Kannur" },
            { name: "Meera", city: "Kochi" },
            { name: "Lakshmi", city: "Calicut" }
        ]);

        console.log("Leads inserted");

        const result = await collection.findOne(
            { city: "Kochi" },
            { projection: { _id: 0, name: 1, city: 1 } }
        );

        console.log("Lead from Kochi:");
        console.log(result);

    }

    catch (err) {
        console.log(err);
    }

    finally {

        await client.close();
    }
}

run();