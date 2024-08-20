const WorkoutSessionRepository = require("../../repositories/workoutSessionRepository");
const APIError = require("../../core/api-errors");
const createWorkoutSession = async (req, res) => {
  try {
    const workoutSessionData = req.body;
    console.log(workoutSessionData)
    await WorkoutSessionRepository.createOne({
      workoutDate: workoutSessionData.workoutDate,
      exercises: workoutSessionData.exercises,
    });
  } catch (err) {
    throw err;
  }
};

const startWorkoutSession = async (req, res) => {
  try {
    const startSessionData = req.body;
    const updatedWorkoutSession =
      await WorkoutSessionRepository.findOneAndUpdate(
        { _id: startSessionData.id },
        startSessionData.updatedFields
      );
    if (!updatedWorkoutSession) {
      throw new APIError("Wokrout session not found", 404);
    }
    return updatedWorkoutSession;
  } catch (err) {
    throw err;
  }
};

const retrieveWorkoutSession = async (req, res) => {
  try {
    const { workoutSessionId } = req.params;
    const workoutSession = await WorkoutSessionRepository.findOne({
      _id: workoutSessionId,
    });
    if (!workoutSession) {
      throw new APIError("Workout session not found", 404);
    }
  } catch (err) {
    throw err;
  }
};

const retrieveWorkoutSessions = async (req, res) => {
  try {
    const workoutSessions = await WorkoutSessionRepository.findAll({});
    if (!workoutSessions && workoutSession.length === 0) {
      throw new APIError("Workout session not found", 404);
    }
    return workoutSessions
  } catch (err) {
    throw err;
  }
};
module.exports = {
  createWorkoutSession,
  startWorkoutSession,
  retrieveWorkoutSessions,
  retrieveWorkoutSession,
};
