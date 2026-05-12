const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const sampleRegistrations = [
  { name: 'John', city: 'Trivandrum' },
  { name: 'Deepak', city: 'Kollam' },
  { name: 'Dean', city: 'Trivandrum' },
  { name: 'Rahul', city: 'Calicut' },
  { name: 'Ashwin', city: 'Calicut' },
  { name: 'Rolly', city: 'Alleppy' },
  { name: 'Nikhil', city: 'Kottayam' },
  { name: 'Raymond', city: 'Trivandrum' },
  { name: 'Dean', city: 'Calicut' },
];

async function run() {

    try {

        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db("mashupdb");
        const collection = db.collection("registrations");

        await collection.insertMany(sampleRegistrations);

        console.log("Participant data inserted");

        await collection.updateOne(
            { name: "John" },
            {
                $set: {
                    name: "Johnny",
                    city: "Chennai"
                }
            }
        );

        console.log("John updated");

        await collection.updateMany(
            { name: "Dean" },
            {
                $set: {
                    city: "Kollam"
                }
            }
        );

        console.log("Dean records updated");

        await collection.deleteOne(
            { name: "Deepak" }
        );

        console.log("Deepak deleted");

        await collection.deleteMany(
            { name: /^D/ }
        );

        console.log("Participants starting with D deleted");

        const finalData = await collection.find().toArray();

        console.log("\nFinal Participant List:");
        console.log(finalData);

    }

    catch (err) {
        console.log(err);
    }

    finally {

        await client.close();
    }
}

run();