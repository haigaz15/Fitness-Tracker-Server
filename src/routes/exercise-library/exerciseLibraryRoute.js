const express = require("express");
const ExerciseLibraryController = require("../../modules/exercise-library/exerciseLibrary.controller");
const router = express.Router();

router.get(
  "/exercise-library/:type",
  ExerciseLibraryController.getExercisesByType
);
// Purely for testing purposes should be deleted eventually and replaced with seeding db
router.post(
  "/internal/exercise-library/",
  ExerciseLibraryController.createExercise
);

module.exports = router;
