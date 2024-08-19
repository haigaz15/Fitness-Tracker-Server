const ExerciseRepository = require("../../repositories/exerciseRepository");
const exerciseTypes = require("./exercise.type");
const APIError = require("../../core/api-errors");
const getExercisesByType = async (req, res) => {
  try {
    const { type } = req.params;
    if (!exerciseTypes[type]) {
      throw new APIError("Incorrect exercise type", 400);
    }
    const exercises = await ExerciseRepository.findAll({ type: type });
    if (exercises.length === 0 || !exercises) {
      throw new APIError("Could not find the excersies", 404);
    }
    return exercises;
  } catch (err) {
    throw err;
  }
};

const createExercise = async (req, res) => {
  try{
  const exercise = req.body;
  await ExerciseRepository.createOne(exercise);
  }catch(err){
    throw err
  }
};

module.exports = { getExercisesByType, createExercise };
