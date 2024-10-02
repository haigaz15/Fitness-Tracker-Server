import WorkoutSessionRepository from '../../repositories/workoutSessionRepository';
import UserRepository from '../../repositories/userRepository';
import ExerciseOnWorkoutSession from '../../repositories/exerciseOnWorkoutRepository';
import ExerciseRepository from '../../repositories/exerciseRepository';
import { Request, Response } from 'express';
import { PrismaWorkoutSession } from './workout-session.prisma.type';
import { badRequestError, notFoundError } from '../../core/error-list';
import {
   CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES,
   CUSTOM_EXERCISE_ERROR_MESSAGES,
} from '../../core/error-enums';
import { GetUserAuthInfoRequest } from '../../global-types/request.type';
import {
   CreateWorkoutSessionDTO,
   StartWorkoutSessionDTO,
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
         throw notFoundError(CUSTOM_EXERCISE_ERROR_MESSAGES.EXERCISE_NOT_FOUND);
      }
      if (dbExercises.length !== exercises.length) {
         throw badRequestError(CUSTOM_EXERCISE_ERROR_MESSAGES.MISSING_EXERCISE);
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
      const startSessionData = req.body;
      const { session } = req.params;
      const startSession = new StartWorkoutSessionDTO(startSessionData);
      const WorkoutSession = await WorkoutSessionRepository.findOne({
         id: startSession.id,
      });
      if (!WorkoutSession) {
         throw notFoundError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSIONS_NOT_FOUND
         );
      }
      if (
         session === 'start' &&
         !startSession.startTime &&
         startSession.endTime
      ) {
         throw badRequestError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSION_UPDATE_START_NOT_END
         );
      }
      if (session === 'start' && !startSession.startTime) {
         throw badRequestError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSION_UPDATE_NO_START
         );
      }
      if (
         session === 'end' &&
         !startSession.endTime &&
         startSession.startTime
      ) {
         throw badRequestError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSION_UPDATE_END_NOT_START
         );
      }
      if (session === 'end' && !startSession.endTime) {
         badRequestError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSION_UPDATE_NO_END
         );
      }
      let updatedWorkoutSession;
      if (session === 'start') {
         updatedWorkoutSession = WorkoutSessionRepository.updateOne(
            { id: WorkoutSession.id },
            { startTime: startSessionData.startTime }
         );
      } else {
         updatedWorkoutSession = WorkoutSessionRepository.updateOne(
            { id: WorkoutSession.id },
            { endTime: startSessionData.endTime }
         );
      }
      return updatedWorkoutSession;
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
         throw notFoundError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSION_NOT_FOUND
         );
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
         throw notFoundError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSIONS_NOT_FOUND
         );
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
