import WorkoutSessionRepository from '../../repositories/workoutSessionRepository';
import UserRepository from '../../repositories/userRepository';
import { Response, Request } from 'express';
import { GetUserAuthInfoRequest } from '../../global-types/request.type';
import { notFoundError } from '../../core/error-list';
import {
   CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES,
   CUSTOM_STAT_MESSAGES,
   CUSTOM_USER_ERROR_MESSAGES,
} from '../../core/error-enums';

const averageDurationOfWorkouts = () => {};

const averageDurationOfEachExercise = () => {};

const avgWeightLiftedPerSession = () => {};

const caloriesBurned = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const MET = 6;
      const user = await UserRepository.findOne({
         username: req.user.username,
      });
      if (!user) {
         throw notFoundError(CUSTOM_USER_ERROR_MESSAGES.USER_NOT_FOUND);
      }
      const userWeight = user.weight;
      if (!userWeight) {
         throw notFoundError(CUSTOM_STAT_MESSAGES.USER_WEIGHT_DONNOT_EXIST);
      }
      const workoutSessions = await WorkoutSessionRepository.findAll();
      if (!workoutSessions || workoutSessions.length === 0) {
         throw notFoundError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSIONS_NOT_FOUND
         );
      }
      const sessionTimesInHours = workoutSessions.map(
         (workoutSession) => workoutSession.sessionTime / (1000 * 60 * 60)
      );
      const burnedCalories = sessionTimesInHours.map((duration) => {
         return MET * userWeight * duration;
      });
      return burnedCalories;
   } catch (err) {
      throw err;
   }
};

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

export default { workoutIntensity, caloriesBurned };
