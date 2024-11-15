import express from 'express';
import authMiddleWare from '../../middlewares/authMiddleware';
import WorkoutStatController from '../../modules/workout-stats/workoutStat.controller';
const router = express.Router();

router.get(
   '/workout-stat/intensity',
   authMiddleWare,
   WorkoutStatController.workoutIntensity
);

export default router;
