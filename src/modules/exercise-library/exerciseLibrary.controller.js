const ExerciseLibraryService = require("./exerciseLibrary.service");

const getExercisesByType = async (req, res, next) => {
  try {
    const exercises = await ExerciseLibraryService.getExercisesByType(req, res);
    res.send(exercises);
  } catch (err) {
    next(err);
  }
};

const createExercise = async (req, res, next) => {
  try {
    await ExerciseLibraryService.createExercise(req, res);
    res.status(201).json({ message: "Exercise sucessfully created" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getExercisesByType, createExercise };
