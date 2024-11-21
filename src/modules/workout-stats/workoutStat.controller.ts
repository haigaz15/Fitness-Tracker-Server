import { NextFunction, Response, Request } from 'express';
import WorkoutStatService from './workoutStat.service';
const workoutIntensity = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const workoutIntensityData = await WorkoutStatService.workoutIntensity(
         req,
         res
      );
      res.send(workoutIntensityData);
   } catch (err) {
      next(err);
   }
};

const caloriesBurned = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const burnedCalories = await WorkoutStatService.caloriesBurned(req, res);
      res.send({ burnedCaloriesPerSession: burnedCalories });
   } catch (err) {
      next(err);
   }
};

export default { workoutIntensity, caloriesBurned };
