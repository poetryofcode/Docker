const http = require("http");
const { MongoClient } = require("mongodb");

const url = "mongodb://db:27017"; // 👈 important
const client = new MongoClient(url);

async function start() {
  await client.connect();
  console.log("Connected to MongoDB");

  const server = http.createServer((req, res) => {
    res.end("App + DB working 🚀");
  });

  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

start();
