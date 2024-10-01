import WorkoutSessionRepository from '../../repositories/workoutSessionRepository';
import UserRepository from '../../repositories/userRepository';
import ExerciseOnWorkoutSession from '../../repositories/exerciseOnWorkoutRepository';
import ExerciseRepository from '../../repositories/exerciseRepository';
import { Request, Response } from 'express';
import { PrismaWorkoutSession } from './workout-session.prisma.type';
import { badRequestError, notFoundError } from '../../core/error-list';
import { CUSTOM_ERROR_MESSAGES } from '../../core/error-enums';
import { WorkoutSessionExercise } from './workout-session.type';
import { GetUserAuthInfoRequest } from '../../global-types/request.type';
import {
   CreateWorkoutSessionDTO,
   WorkoutSessionExerciseDTO,
   WorkoutSessionExerciseInput,
} from './dto/workoutSession.dto';
const createWorkoutSession = async (
   req: GetUserAuthInfoRequest,
   res: Response
) => {
   try {
      const workoutSessionData = req.body;
      const exercises = workoutSessionData.exercises.map(
         (exercise: WorkoutSessionExerciseInput) => {
            return new WorkoutSessionExerciseDTO(exercise);
         }
      );
      const user = await UserRepository.findOne({
         username: req.user.username,
      });

      const w = new CreateWorkoutSessionDTO({
         workoutDate: workoutSessionData.workoutDate,
         exercises: exercises,
         userId: user?.id,
      });
      const workoutSession = await WorkoutSessionRepository.createOne({
         workoutDate: w.workoutDate,
         user: {
            connect: { id: w.userId as string },
         },
      });
      const exerciseNames = exercises.map(
         (exercise: WorkoutSessionExerciseInput) => exercise.exerciseName
      );
      const dbExercises = await ExerciseRepository.findAll({
         name: { in: exerciseNames },
      });
      if (!dbExercises || dbExercises.length === 0) {
         throw notFoundError(CUSTOM_ERROR_MESSAGES.EXERCISE_NOT_FOUND);
      }
      if (dbExercises.length !== exercises.length) {
         throw badRequestError(CUSTOM_ERROR_MESSAGES.MISSING_EXERCISE);
      }
      await ExerciseOnWorkoutSession.createMany(
         dbExercises?.map((e: any, index: number) => {
            return {
               set: exercises[index].set,
               reps: exercises[index].reps,
               workoutSessionId: workoutSession.id,
               exerciseId: e.id,
            };
         })
      );
   } catch (err) {
      throw err;
   }
};

const startEndWorkoutSession = async (req: Request, res: Response) => {
   try {
      // const startSessionData = req.body;
      // const { session } = req.params;
      // const startSessionDataDTO = new StartWorkoutSessionDTO(startSessionData);
      // const updatedWorkoutSession = await WorkoutSessionRepository.findOne({
      //    _id: startSessionDataDTO.id,
      // });
      // if (!updatedWorkoutSession) {
      //    throw new APIError('Wokrout session not found', 404);
      // }
      // if (
      //    session === 'start' &&
      //    !startSessionDataDTO.startTime &&
      //    startSessionDataDTO.endTime
      // ) {
      //    throw new APIError(
      //       'End time is provided but the session is start',
      //       400
      //    );
      // }
      // if (session === 'start' && !startSessionDataDTO.startTime) {
      //    throw new APIError(
      //       'Start time is empty please provide the start time',
      //       400
      //    );
      // }
      // if (
      //    session === 'end' &&
      //    !startSessionDataDTO.endTime &&
      //    startSessionDataDTO.startTime
      // ) {
      //    throw new APIError(
      //       'Start time is provided but the session is end',
      //       400
      //    );
      // }
      // if (session === 'end' && !startSessionDataDTO.endTime) {
      //    throw new APIError(
      //       'End time is empty please provide the End time',
      //       400
      //    );
      // }
      // session === 'start'
      //    ? (updatedWorkoutSession.startTime = startSessionDataDTO.startTime)
      //    : (updatedWorkoutSession.endTime = startSessionDataDTO.endTime);
      // await updatedWorkoutSession.save();
      // return updatedWorkoutSession;
   } catch (err) {
      throw err;
   }
};

const retrieveWorkoutSession = async (req: Request, res: Response) => {
   try {
      const { workoutSessionId } = req.params;
      const workoutSession = await WorkoutSessionRepository.findOne({
         id: workoutSessionId,
      });
      if (!workoutSession) {
         throw notFoundError(CUSTOM_ERROR_MESSAGES.WORKOUT_SESSION_NOT_FOUND);
      }
   } catch (err) {
      throw err;
   }
};

const retrieveWorkoutSessions = async (req: Request, res: Response) => {
   try {
      const workoutSessions: PrismaWorkoutSession[] =
         await WorkoutSessionRepository.findAll();
      if (!workoutSessions || workoutSessions.length === 0) {
         throw notFoundError(CUSTOM_ERROR_MESSAGES.WORKOUT_SESSIONS_NOT_FOUND);
      }
      return workoutSessions;
   } catch (err) {
      throw err;
   }
};
export default {
   createWorkoutSession,
   startEndWorkoutSession,
   retrieveWorkoutSessions,
   retrieveWorkoutSession,
};
