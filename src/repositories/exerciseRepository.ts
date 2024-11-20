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

const findAllWithPagination = async (
   skip: number = 0,
   take: number = 10,
   query: PrismaExerciseWhereInput
): Promise<PrismaExercise[] | null> => {
   return await prisma.exercise.findMany({
      skip,
      take,
      where: query,
   });
};

const createOne = async (
   data: PrismaCreateExercise
): Promise<PrismaExercise> => {
   return prisma.exercise.create({ data });
};

const createMany = async (
   data: PrismaCreateExercise[]
): Promise<{ count: number }> => {
   return await prisma.exercise.createMany({ data });
};

export default {
   findOne,
   createOne,
   createMany,
   findAll,
   findAllWithPagination,
};
