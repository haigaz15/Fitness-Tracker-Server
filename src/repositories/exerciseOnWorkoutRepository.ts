import prisma from '../core/prisma-client';
import {
   PrismaExerciseOnWorkoutCreateInput,
   PrismaExerciseOnWorkout,
   PrismaExerciseOnWorkoutWhereInput,
   PrismaExerciseOnWorkoutCreateManyInput,
} from '../modules/workout/exercise-on-workout.prisma.type';

const createOne = async (
   data: PrismaExerciseOnWorkoutCreateInput
): Promise<PrismaExerciseOnWorkout> => {
   return await prisma.exerciseOnWorkout.create({ data });
};

const findOne = async (query: PrismaExerciseOnWorkoutWhereInput) => {
   return await prisma.exerciseOnWorkout.findFirst({ where: query });
};

const createMany = async (data: PrismaExerciseOnWorkoutCreateManyInput[]) => {
   await prisma.exerciseOnWorkout.createMany({ data });
};

const findAll = async (query: PrismaExerciseOnWorkoutWhereInput) => {
   return await prisma.exerciseOnWorkout.findMany({
      where: query,
   });
};

export default { createOne, findOne, createMany, findAll };
