import ExerciseRepository from '../../repositories/exerciseRepository';
import { EquipmentType, IExercise, exerciseTypes } from './exercise.type';
import APIError from '../../core/api-errors';
import { ExerciseDTO } from './dto/exerciseLibraryDTO';
import { Request, Response } from 'express';
const getExercisesByType = async (req: Request, res: Response) => {
   try {
      const { type } = req.params;
      if (!exerciseTypes[type as EquipmentType]) {
         throw new APIError('Incorrect exercise type', 400);
      }
      const exercises =
         type === exerciseTypes.all
            ? await ExerciseRepository.findAll({})
            : await ExerciseRepository.findAll({ type: type });
      if (exercises?.length === 0 || !exercises) {
         throw new APIError('Could not find the excersies', 404);
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
      const exercise = req.body;
      await ExerciseRepository.createOne(new ExerciseDTO(exercise));
   } catch (err) {
      console.log(err);
      throw err;
   }
};

export default { getExercisesByType, createExercise };
