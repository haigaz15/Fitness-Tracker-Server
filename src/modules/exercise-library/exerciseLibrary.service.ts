import ExerciseRepository from '../../repositories/exerciseRepository';
import { EquipmentType, IExercise, exerciseTypes } from './exercise.type';
import APIError from '../../core/api-errors';
import { ExerciseDTO } from './dto/exerciseLibraryDTO';
import { Request, Response } from 'express';
import {
   badRequestError,
   conflictError,
   notFoundError,
} from '../../core/error-list';
import { CUSTOM_ERROR_MESSAGES } from '../../core/error-enums';
const getExercisesByType = async (req: Request, res: Response) => {
   try {
      const { type } = req.params;
      if (!exerciseTypes[type as EquipmentType]) {
         throw badRequestError(CUSTOM_ERROR_MESSAGES.INCORRECT_EXCERCISE_TYPE);
      }
      const exercises =
         type === exerciseTypes.all
            ? await ExerciseRepository.findAll({})
            : await ExerciseRepository.findAll({ type: type });
      if (exercises?.length === 0 || !exercises) {
         throw notFoundError(CUSTOM_ERROR_MESSAGES.EXERCISE_NOT_FOUND);
      }
      return exercises.map((exercise: IExercise) => {
         return {
            name: exercise.name,
            type: exercise.type,
            description: exercise.description,
         };
      });
   } catch (err) {
      console.log(err);
      throw err;
   }
};

const createExercise = async (req: Request, res: Response) => {
   try {
      const exercisedata = req.body;
      const exercise = new ExerciseDTO(exercisedata);
      if (!exerciseTypes[exercise.type as EquipmentType]) {
         throw badRequestError(CUSTOM_ERROR_MESSAGES.INCORRECT_EXCERCISE_TYPE);
      }
      const exerciseExist = await ExerciseRepository.findOne({
         name: exercise.name,
      });
      if (exerciseExist) {
         throw conflictError(CUSTOM_ERROR_MESSAGES.EXERCISE_EXIST);
      }
      await ExerciseRepository.createOne(exercise);
   } catch (err) {
      throw err;
   }
};

export default { getExercisesByType, createExercise };
