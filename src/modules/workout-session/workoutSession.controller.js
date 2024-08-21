const WorkoutSessionService = require("./workoutSession.service");

const createWorkoutSession = async (req, res, next) => {
    console.log("here")
  try {
    await WorkoutSessionService.createWorkoutSession(req, res);
    res.status(201).send({message:"sucessfully created"})
  } catch (err) {
    next(err);
  }
};

const startEndWorkoutSession = async (req, res, next) => {
  try {
    const sessionUpdate = await WorkoutSessionService.startEndWorkoutSession(req, res);
    res.send(sessionUpdate)
  } catch (err) {
    next(err);
  }
};

const retrieveWorkoutSession = async (req, res, next) => {
  try {
    const workoutSession = await WorkoutSessionService.retrieveWorkoutSession(
      req,
      res
    );
    res.status(200).send(workoutSession);
  } catch (err) {
    next(err);
  }
};

const retrieveWorkoutSessions = async (req, res, next) => {
  try {
    const workoutSessions = await WorkoutSessionService.retrieveWorkoutSessions(
      req,
      res
    );
    res.status(200).send(workoutSessions);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createWorkoutSession,
  retrieveWorkoutSession,
  startEndWorkoutSession,
  retrieveWorkoutSessions,
};
