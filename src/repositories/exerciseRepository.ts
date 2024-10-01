import prisma from '../core/prisma-client';
import {
   PrismaCreateExercise,
   PrismaExercise,
   PrismaExerciseWhereInput,
   PrismaExerciseWhereUniqueInput,
} from '../modules/exercise-library/exercise.prisma.type';

const findOne = async (
   query: PrismaExerciseWhereUniqueInput
): Promise<PrismaExercise | null> => {
   return await prisma.exercise.findUnique({
      where: query,
   });
};

const findAll = async (
   query: PrismaExerciseWhereInput
): Promise<PrismaExercise[] | null> => {
   return await prisma.exercise.findMany({
      where: query,
   });
};

const createOne = async (
   data: PrismaCreateExercise
): Promise<PrismaExercise> => {
   return prisma.exercise.create({ data });
};

const insertMany = async (
   data: PrismaExercise[]
): Promise<{ count: number }> => {
   return await prisma.exercise.createMany({ data });
};

export default { findOne, createOne, insertMany, findAll };
