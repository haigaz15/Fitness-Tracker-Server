const WorkoutSessionRepository = require("../../repositories/workoutSessionRepository");
const APIError = require("../../core/api-errors");
const mongoose = require("mongoose");
const {
  ExerciseParentDTO,
  ExerciseDTO,
  CreateWorkoutSessionDTO,
} = require("./dto/workoutSession.dto");
const createWorkoutSession = async (req, res) => {
  try {
    const workoutSessionData = req.body;
    const exercises = workoutSessionData.exercises.map((e) => {
      const exerciseParent = {
        exercise: new ExerciseDTO(e.exercise),
        set: e.set,
        reps: e.reps,
      };
      return new ExerciseParentDTO(exerciseParent);
    });

    await WorkoutSessionRepository.createOne(
      new CreateWorkoutSessionDTO({
        workoutDate: workoutSessionData.workoutDate,
        exercises: exercises,
      })
    );
  } catch (err) {
    throw err;
  }
};

const startEndWorkoutSession = async (req, res) => {
  try {
    const startSessionData = req.body;
    const { session } = req.params;
    const updatedWorkoutSession = await WorkoutSessionRepository.findOne({
      _id: startSessionData._id,
    });
    if (!updatedWorkoutSession) {
      throw new APIError("Wokrout session not found", 404);
    }
    session === "start"
      ? (updatedWorkoutSession.startTime = startSessionData.startTime)
      : (updatedWorkoutSession.endTime = startSessionData.endTime);
    await updatedWorkoutSession.save();
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
    return workoutSessions;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  createWorkoutSession,
  startEndWorkoutSession,
  retrieveWorkoutSessions,
  retrieveWorkoutSession,
};
