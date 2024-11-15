import { NextFunction, Response, Request } from 'express';
import WorkoutService from './workout.service';
import { HTTP_SUCCESS_MESSAGES } from '../../core/success-enums';
import workoutService from './workout.service';

const createWorkout = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      await WorkoutService.createWorkout(req, res);
      res.status(201).send({ message: HTTP_SUCCESS_MESSAGES.CREATED });
   } catch (err) {
      next(err);
   }
};

const startWorkoutSession = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const sessionUpdate = await WorkoutService.startWorkoutSession(req, res);
      res.send({
         message: HTTP_SUCCESS_MESSAGES.UPDATED,
         updatedSession: sessionUpdate,
      });
   } catch (err) {
      next(err);
   }
};

const endWorkoutSession = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const sessionUpdate = await workoutService.endWorkoutSession(req, res);
      return res.send({
         message: HTTP_SUCCESS_MESSAGES.UPDATED,
         updatedSession: sessionUpdate,
      });
   } catch (err) {
      next(err);
   }
};

const updateWorkoutSessionVolume = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const updatedWorkoutSession =
         await WorkoutService.updateWorkoutSessionVolume(req, res);
      res.send({
         message: HTTP_SUCCESS_MESSAGES.UPDATED,
         updatedWorkoutSession: updatedWorkoutSession,
      });
   } catch (err) {
      next(err);
   }
};

const retrieveWorkout = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const workout = await WorkoutService.retrieveWorkout(req, res);
      res.status(200).send(workout);
   } catch (err) {
      next(err);
   }
};

const retrieveWorkouts = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const workouts = await WorkoutService.retrieveWorkouts(req, res);
      res.status(200).send(workouts);
   } catch (err) {
      next(err);
   }
};

const retrieveWorkoutWithWorkoutSession = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const workoutsWithWorkoutSessions =
         await WorkoutService.retrieveWorkoutWithWorkoutSession(req, res);
      res.status(200).send(workoutsWithWorkoutSessions);
   } catch (err) {
      next(err);
   }
};

const deleteAllWorkouts = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const deletedWorkouts = await WorkoutService.deleteWorkouts(req, res);
      res.status(200).json({
         message: HTTP_SUCCESS_MESSAGES.DELETED,
         deletedWorkouts: deletedWorkouts,
      });
   } catch (err) {
      next(err);
   }
};

export default {
   createWorkout,
   retrieveWorkout,
   startWorkoutSession,
   endWorkoutSession,
   retrieveWorkouts,
   deleteAllWorkouts,
   updateWorkoutSessionVolume,
   retrieveWorkoutWithWorkoutSession,
};
