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

const calculateWeeklySessionRange = () => {
   const today = new Date();
   const day = today.getDay();
   const diffToMonday = day === 0 ? -6 : 1 - day;

   const monday = new Date(today);
   monday.setDate(today.getDate() + diffToMonday);
   monday.setHours(0, 0, 0, 0); //

   const sunday = new Date(monday);
   sunday.setDate(monday.getDate() + 6);
   sunday.setHours(23, 59, 59, 999);
   return [monday, sunday];
};

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
      const [monday, sunday] = calculateWeeklySessionRange();
      const groupWorkoutSessionsBySessionDateData =
         await WorkoutSessionRepository.groupWorkoutSessionsBySessionDate({
            sessionDate: {
               gte: monday,
               lte: sunday,
            },
         });

      const sessionTimesInHours = groupWorkoutSessionsBySessionDateData.map(
         (workoutSession) =>
            workoutSession._sum.sessionTime
               ? workoutSession._sum.sessionTime / (1000 * 60 * 60)
               : 0
      );
      const burnedCalories = sessionTimesInHours.map((duration) => {
         return MET * userWeight * duration;
      });
      return groupWorkoutSessionsBySessionDateData.map(
         (workoutSession, index) => {
            return {
               day: workoutSession.sessionDate.toLocaleDateString('en-US', {
                  weekday: 'short',
               }),
               burnedCaloriesPerDay: burnedCalories[index],
            };
         }
      );
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

const quadraticPenalty = (k: number, S: number, a: number, b: number) => {
   return k / ((S - a) ** 2 + 1) + k / ((b - S) ** 2 + 1);
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
      const penalties = workoutSessions.map((session) =>
         quadraticPenalty(10, session.totalSets, 10, 28)
      );
      const penalisedIntensities = intensities.map(
         (i, index) => i * penalties[index]
      );
      return {
         intensities,
         deltaIntensities: intensityRateOfChange,
         penalisedIntensities: penalisedIntensities,
      };
   } catch (err) {
      throw err;
   }
};

const weightLoss = () => {};

const muscleGain = () => {};

const muscleSizeGrowth = () => {};

export default { workoutIntensity, caloriesBurned };
