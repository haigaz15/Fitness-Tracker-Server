import express, { RequestHandler } from 'express';
import WorkoutSessionController from '../../modules/workout-session/workoutSession.controller';
import authMiddleWare from '../../middlewares/authMiddleware';
const router = express.Router();

router.post(
   '/workout-session',
   authMiddleWare,
   WorkoutSessionController.createWorkoutSession
);

router.get(
   '/workout-sessions',
   authMiddleWare,
   WorkoutSessionController.retrieveWorkoutSessions
);

router.put(
   '/workout-session/:session',
   authMiddleWare,
   WorkoutSessionController.startEndWorkoutSession
);

export default router;
