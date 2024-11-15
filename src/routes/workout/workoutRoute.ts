import express from 'express';
import WorkoutController from '../../modules/workout/workout.controller';
import authMiddleWare from '../../middlewares/authMiddleware';
const router = express.Router();

router.post('/workout', authMiddleWare, WorkoutController.createWorkout);
//just for testing and development purposes I removed the authMiddleWare of this route
router.get('/workouts', WorkoutController.retrieveWorkouts);
router.delete('/workouts', authMiddleWare, WorkoutController.deleteAllWorkouts);
router.get(
   '/workout/:workoutId/workout-sessions',
   WorkoutController.retrieveWorkoutWithWorkoutSession
);
router.put(
   '/workout-session/start',
   authMiddleWare,
   WorkoutController.startWorkoutSession
);
router.put(
   '/workout-session/end',
   authMiddleWare,
   WorkoutController.endWorkoutSession
);

router.put(
   '/workout-session/:sessionId',
   authMiddleWare,
   WorkoutController.updateWorkoutSessionVolume
);

export default router;
