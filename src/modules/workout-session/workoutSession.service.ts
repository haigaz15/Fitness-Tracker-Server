import WorkoutSessionRepository from '../../repositories/workoutSessionRepository';
import APIError from '../../core/api-errors';
import { Request, Response } from 'express';
import { ExerciseDTO } from '../exercise-library/dto/exerciseLibraryDTO';
import UserRepository from '../../repositories/userRepository';
import { IWorkoutSession } from './workout-session.type';
import { notFoundError } from '../../core/error-list';
import { CUSTOM_ERROR_MESSAGES } from '../../core/error-enums';
const createWorkoutSession = async (req: Request, res: Response) => {
   try {
      // const workoutSessionData = req.body;
      // const exercises = workoutSessionData.exercises.map((e) => {
      //    const exerciseParent = {
      //       exercise: new ExerciseDTO(e.exercise),
      //       set: e.set,
      //       reps: e.reps,
      //    };
      //    return new ExerciseParentDTO(exerciseParent);
      // });
      // const user = await UserRepository.findOne({
      //    username: req.user.username,
      // });
      // const workoutSession = await WorkoutSessionRepository.createOne(
      //    new CreateWorkoutSessionDTO({
      //       workoutDate: workoutSessionData.workoutDate,
      //       exercises: exercises,
      //       user: user.id,
      //    })
      // );
      // await UserRepository.findByIdAndUpdate(user?.id, {
      //    $push: { workoutSession: workoutSession.id },
      // });
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
      const workoutSessions: IWorkoutSession[] =
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
