const WorkoutSessionRepository = require("../../repositories/workoutSessionRepository");
const APIError = require("../../core/api-errors");
const mongoose = require("mongoose");
const {
  ExerciseParentDTO,
  ExerciseDTO,
  CreateWorkoutSessionDTO,
  StartWorkoutSessionDTO,
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
    const startSessionDataDTO = new StartWorkoutSessionDTO(startSessionData);
    const updatedWorkoutSession = await WorkoutSessionRepository.findOne({
      _id: startSessionDataDTO.id,
    });
    if (!updatedWorkoutSession) {
      throw new APIError("Wokrout session not found", 404);
    }
    if (
      session === "start" &&
      !startSessionDataDTO.startTime &&
      startSessionDataDTO.endTime
    ) {
      throw new APIError("End time is provided but the session is start", 400);
    }
    if (session === "start" && !startSessionDataDTO.startTime) {
      throw new APIError(
        "Start time is empty please provide the start time",
        400
      );
    }
    if (
      session === "end" &&
      !startSessionDataDTO.endTime &&
      startSessionDataDTO.startTime
    ) {
      throw new APIError("Start time is provided but the session is end", 400);
    }
    if (session === "end" && !startSessionDataDTO.endTime) {
      throw new APIError("End time is empty please provide the End time", 400);
    }
    session === "start"
      ? (updatedWorkoutSession.startTime = startSessionDataDTO.startTime)
      : (updatedWorkoutSession.endTime = startSessionDataDTO.endTime);
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
