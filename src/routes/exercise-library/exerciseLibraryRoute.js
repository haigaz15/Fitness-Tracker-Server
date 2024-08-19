const express = require("express");
const ExerciseLibraryController = require("../../modules/exercise-library/exerciseLibrary.controller");
const route = express.Router();

route.get(
  "/exercise-library/barbell",
  ExerciseLibraryController.getBarbellExercises
);
// Purely for testing purposes should be deleted eventually and replaced with seeding db
route.get(
  "/internal/exercise-library/",
  ExerciseLibraryController.createExercise
);

module.exports = route;
