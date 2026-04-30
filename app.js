const crypto = require("crypto");
global.crypto = crypto;

const http = require("http");
const { MongoClient } = require("mongodb");

const url = "mongodb://db:27017";
const client = new MongoClient(url);

async function start() {
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db("testdb");
  const collection = db.collection("messages");

  const server = http.createServer(async (req, res) => {
    if (req.url === "/add") {
      await collection.insertOne({ text: "Hello from Docker 🚀" });
      res.end("Data added");
      return;
    }

    if (req.url === "/list") {
      const data = await collection.find().toArray();
      res.end(JSON.stringify(data));
      return;
    }

    res.end("Use /add or /list");
  });

  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

start();
