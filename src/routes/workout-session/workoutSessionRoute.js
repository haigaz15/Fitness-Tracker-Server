const express = require("express");
const WorkoutSessionController = require("../../modules/workout-session/workoutSession.controller");
const authMiddleWare = require("../../middlewares/authMiddleware");
const router = express.Router();

router.post(
  "/workout-session",
  authMiddleWare,
  WorkoutSessionController.createWorkoutSession
);

router.get(
  "/workout-sessions",
  authMiddleWare,
  WorkoutSessionController.retrieveWorkoutSessions
);

router.put(
  "/workout-session/:session",
  WorkoutSessionController.startEndWorkoutSession
);

module.exports = router;
