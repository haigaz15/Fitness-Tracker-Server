const mongoose = require("mongoose");
require("dotenv").config();
const db_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hfijhsy.mongodb.net/${process.env.db_NAME}?appName=Cluster0`;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const run = async () => {
  try {
    await mongoose.connect(db_URI, clientOptions);
    console.log("Connected to MongoDB successfully");
    const db = mongoose.connection;
    await db.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error(`Failed to connect to MongoDB : ${error}`);
  }
};

module.exports = { run };
