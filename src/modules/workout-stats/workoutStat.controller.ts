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

export default { workoutIntensity };
