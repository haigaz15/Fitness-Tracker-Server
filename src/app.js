const express = require("express");
const exerciseLibraryRouter = require("./routes/exercise-library/exerciseLibraryRoute");
require("dotenv").config();

const app = express();

app.use(exerciseLibraryRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listing to PORT ${process.env.PORT}`);
});
