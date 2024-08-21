const express = require("express");
const WorkoutSessionController = require("../../modules/workout-session/workoutSession.controller");
const router = express.Router();

router.post("/workout-session", WorkoutSessionController.createWorkoutSession);

router.get(
  "/workout-sessions",
  WorkoutSessionController.retrieveWorkoutSessions
);

router.put(
  "/workout-session/:session",
  WorkoutSessionController.startEndWorkoutSession
);

module.exports = router;
