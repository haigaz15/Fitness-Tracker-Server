import WorkoutSessionRepository from '../../repositories/workoutSessionRepository';
import { Response, Request } from 'express';

const averageDurationOfWorkouts = () => {};

const averageDurationOfEachExercise = () => {};

const avgWeightLiftedPerSession = () => {};

const caloriesBurned = () => {};

const progressPerExercise = () => {};

const workoutFrequency = () => {};

const calculateIntensity = (
   weight: number,
   rep: number,
   rest: number,
   set: number
) => {
   return rest * set > 0 ? (weight * rep) / (rest * set) : 0;
};

const workoutIntensity = async (req: Request, res: Response) => {
   try {
      const workoutSessions = await WorkoutSessionRepository.findAll();
      const intensities = workoutSessions.map((workoutSession) =>
         calculateIntensity(
            workoutSession.totalWeight,
            workoutSession.totalReps,
            workoutSession.totalRest,
            workoutSession.totalRest
         )
      );
      const intensityRateOfChange = intensities.slice(1).reduce(
         (acc, curr, i) => {
            acc.push(curr - intensities[i]); // Use acc as an array to store the differences
            return acc;
         },
         [intensities[0]]
      );
      return { intensities, deltaIntensities: intensityRateOfChange };
   } catch (err) {
      throw err;
   }
};

const weightLoss = () => {};

const muscleGain = () => {};

const muscleSizeGrowth = () => {};

export default { workoutIntensity };
