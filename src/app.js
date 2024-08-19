const express = require("express");
const exerciseLibraryRouter = require("./routes/exercise-library/exerciseLibraryRoute");
require("dotenv").config();
const db = require("./db/db");
const app = express();

app.use(exerciseLibraryRouter);

async function initializeServer() {
  try {
    await db.run();
    app.listen(process.env.PORT, () => {
      console.log(`Listing to PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to initilze the server", error);
  }
}

initializeServer();
