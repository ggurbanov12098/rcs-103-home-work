const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ggurbanov12098:hawx@testdb.luj27gh.mongodb.net/?retryWrites=true&w=majority&appName=testdb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectDB = async () => {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = { client, connectDB };
