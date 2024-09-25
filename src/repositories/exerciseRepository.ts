import prisma from '../core/prisma-client';
import {
   IExercise,
   IExerciseWhereInput,
   IExerciseWhereUniqueInput,
} from '../modules/exercise-library/exercise.type';

const findOne = async (
   query: IExerciseWhereUniqueInput
): Promise<IExercise | null> => {
   return await prisma.exercise.findUnique({
      where: query,
   });
};

const findAll = async (
   query: IExerciseWhereInput
): Promise<IExercise[] | null> => {
   return await prisma.exercise.findMany({
      where: query,
   });
};

const createOne = async (data: IExercise): Promise<IExercise> => {
   return prisma.exercise.create({ data });
};

const insertMany = async (data: IExercise[]): Promise<{ count: number }> => {
   return await prisma.exercise.createMany({ data });
};

export default { findOne, createOne, insertMany, findAll };
