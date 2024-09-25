import { NextFunction, Response, Request } from 'express';
import WorkoutSessionService from './workoutSession.service';

const createWorkoutSession = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      await WorkoutSessionService.createWorkoutSession(req, res);
      res.status(201).send({ message: 'sucessfully created' });
   } catch (err) {
      next(err);
   }
};

const startEndWorkoutSession = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const sessionUpdate = await WorkoutSessionService.startEndWorkoutSession(
         req,
         res
      );
      res.send(sessionUpdate);
   } catch (err) {
      next(err);
   }
};

const retrieveWorkoutSession = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const workoutSession = await WorkoutSessionService.retrieveWorkoutSession(
         req,
         res
      );
      res.status(200).send(workoutSession);
   } catch (err) {
      next(err);
   }
};

const retrieveWorkoutSessions = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const workoutSessions =
         await WorkoutSessionService.retrieveWorkoutSessions(req, res);
      res.status(200).send(workoutSessions);
   } catch (err) {
      next(err);
   }
};

export default {
   createWorkoutSession,
   retrieveWorkoutSession,
   startEndWorkoutSession,
   retrieveWorkoutSessions,
};
