import { NextFunction, Request, Response } from 'express';
import ExerciseLibraryService from './exerciseLibrary.service';
import { HTTP_SUCCESS_MESSAGES } from '../../core/success-enums';

const getExercisesByType = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const exercises = await ExerciseLibraryService.getExercisesByType(
         req,
         res
      );
      res.send(exercises);
   } catch (err) {
      next(err);
   }
};

const createExercise = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      await ExerciseLibraryService.createExercise(req, res);
      res.status(201).json({ message: HTTP_SUCCESS_MESSAGES.CREATED });
   } catch (err) {
      next(err);
   }
};

export default { getExercisesByType, createExercise };
