import ExerciseRepository from '../../repositories/exerciseRepository';
import {
   ExerciseRequestDTO,
   ExerciseRequestInput,
   ExerciseResponseDTO,
   ExerciseResponseInput,
} from './dto/exerciseLibraryDTO';
import { Request, Response } from 'express';
import { badRequestError, conflictError } from '../../core/error-list';
import { CUSTOM_EXERCISE_ERROR_MESSAGES } from '../../core/error-enums';
import { EquipmentType, exerciseTypes } from './exercise.type';
const getExercisesByType = async (req: Request, res: Response) => {
   try {
      const { type } = req.params;
      const { skip, take } = req.query;
      const searchQuery = req.query.searchQuery?.toString();
      if (!exerciseTypes[type as EquipmentType]) {
         throw badRequestError(
            CUSTOM_EXERCISE_ERROR_MESSAGES.INCORRECT_EXCERCISE_TYPE
         );
      }
      const exercises = searchQuery
         ? await ExerciseRepository.findAll({
              name: { contains: searchQuery, mode: 'insensitive' },
              type: type !== exerciseTypes.all ? type : undefined,
           })
         : type === exerciseTypes.all
           ? await ExerciseRepository.findAllWithPagination(
                Number(skip),
                Number(take),
                {}
             )
           : await ExerciseRepository.findAllWithPagination(
                Number(skip),
                Number(take),
                {
                   type: type,
                }
             );
      return exercises?.map((exercise: ExerciseResponseInput) => {
         return new ExerciseResponseDTO({
            name: exercise.name,
            type: exercise.type,
            description: exercise.description,
            primaryMuscle: exercise.primaryMuscle,
            secondaryMuscles: exercise.secondaryMuscles,
            category: exercise.category,
            difficulty: exercise.difficulty,
         });
      });
   } catch (err) {
      throw err;
   }
};

const createExercise = async (req: Request, res: Response) => {
   try {
      const exercisedata = req.body;
      const exercise = new ExerciseRequestDTO(exercisedata);
      if (!exerciseTypes[exercise.type as EquipmentType]) {
         throw badRequestError(
            CUSTOM_EXERCISE_ERROR_MESSAGES.INCORRECT_EXCERCISE_TYPE
         );
      }
      const exerciseExist = await ExerciseRepository.findOne({
         name: exercise.name,
      });
      if (exerciseExist) {
         throw conflictError(CUSTOM_EXERCISE_ERROR_MESSAGES.EXERCISE_EXIST);
      }
      await ExerciseRepository.createOne(exercise);
   } catch (err) {
      throw err;
   }
};

const createExercises = async (req: Request, res: Response) => {
   try {
      const exercisesData = req.body;
      const exercises: ExerciseRequestDTO[] = exercisesData.map(
         (exerciseData: ExerciseRequestInput) => {
            return new ExerciseRequestDTO(exerciseData);
         }
      );
      const unkonwntypes = exercises.filter(
         (exercise) => !exerciseTypes[exercise.type as EquipmentType]
      );
      if (unkonwntypes.length !== 0) {
         throw badRequestError(
            CUSTOM_EXERCISE_ERROR_MESSAGES.INCORRECT_EXCERCISE_TYPES
         );
      }
      const exerciseNames = exercises.map((exercise) => exercise.name);
      const existingExercises = await ExerciseRepository.findAll({
         name: { in: exerciseNames },
      });
      if (existingExercises && existingExercises.length !== 0) {
         throw conflictError(CUSTOM_EXERCISE_ERROR_MESSAGES.EXERCISE_EXIST);
      }
      await ExerciseRepository.createMany(exercises);
   } catch (err) {
      throw err;
   }
};

export default { getExercisesByType, createExercise, createExercises };
