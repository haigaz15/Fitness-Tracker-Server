const express = require("express");
const ExerciseLibraryController = require("../../modules/exercise-library/exerciseLibrary.controller");
const route = express.Router();

route.get(
  "/exercise-library/barbell",
  ExerciseLibraryController.getBarbellExercises
);

module.exports = route; 
