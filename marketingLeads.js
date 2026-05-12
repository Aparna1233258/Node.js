const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function run() {

    try {

        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db("mashupdb");

        const collection = db.collection("leads");

        await collection.insertMany([
            { name: "John", city: "Trivandrum" },
            { name: "Rahul", city: "Calicut" },
            { name: "Dean", city: "Trivandrum" },
            { name: "Deepak", city: "Kollam" },
            { name: "Ashwin", city: "Calicut" },
            { name: "Rolly", city: "Alleppy" },
            { name: "Nikhil", city: "Kottayam" },
            { name: "Raymond", city: "Trivandrum" }
        ]);

        console.log("Leads inserted successfully");

        const result = await collection.find(
            { city: "Calicut" },
            { projection: { _id: 0, name: 1 } }
        ).toArray();

        console.log("Leads from Calicut:");

        result.forEach((lead) => {
            console.log(lead.name);
        });

    }

    catch (err) {
        console.log(err);
    }

    finally {

        await client.close();
    }
}

run();