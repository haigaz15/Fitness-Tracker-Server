const express = require("express");
const ExerciseLibraryController = require("../../modules/exercise-library/exerciseLibrary.controller");
const route = express.Router();

route.get(
  "/exercise-library/:type",
  ExerciseLibraryController.getExercisesByType
);
// Purely for testing purposes should be deleted eventually and replaced with seeding db
route.post(
  "/internal/exercise-library/",
  ExerciseLibraryController.createExercise
);

module.exports = route;
