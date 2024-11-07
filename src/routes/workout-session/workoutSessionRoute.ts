import express from 'express';
import WorkoutSessionController from '../../modules/workout-session/workoutSession.controller';
import authMiddleWare from '../../middlewares/authMiddleware';
const router = express.Router();

router.post(
   '/workout-session',
   authMiddleWare,
   WorkoutSessionController.createWorkoutSession
);
//just for testing and development purposes I removed the authMiddleWare of this route
router.get(
   '/workout-sessions',
   WorkoutSessionController.retrieveWorkoutSessions
);

router.put(
   '/workout-session/:session',
   authMiddleWare,
   WorkoutSessionController.startEndWorkoutSession
);

export default router;
