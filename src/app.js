const express = require("express");
const exerciseLibraryRouter = require("./routes/exercise-library/exerciseLibraryRoute");
const workoutSessionRouter = require("./routes/workout-session/workoutSessionRoute");
require("dotenv").config();
const db = require("./db/db");
const errorMiddleWare = require("./middlewares/errorMiddleware");
const app = express();

app.use(express.json());
app.use(exerciseLibraryRouter);
app.use(workoutSessionRouter);
app.use(errorMiddleWare);
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
