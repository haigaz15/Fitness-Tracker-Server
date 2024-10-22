import prisma from '../core/prisma-client';
import {
   PrismaExerciseOnWorkoutSessionCreateInput,
   PrismaExerciseOnWorkoutSession,
   PrismaExerciseOnWorkoutSessionWhereInput,
   PrismaExerciseOnWorkoutSessionCreateManyInput,
} from '../modules/workout-session/exercise-on-workout.prisma.type';

const createOne = async (
   data: PrismaExerciseOnWorkoutSessionCreateInput
): Promise<PrismaExerciseOnWorkoutSession> => {
   return await prisma.exerciseOnWorkoutSession.create({ data });
};

const findOne = async (query: PrismaExerciseOnWorkoutSessionWhereInput) => {
   return await prisma.exerciseOnWorkoutSession.findFirst({ where: query });
};

const createMany = async (
   data: PrismaExerciseOnWorkoutSessionCreateManyInput[]
) => {
   await prisma.exerciseOnWorkoutSession.createMany({ data });
};

const findAll = async (query: PrismaExerciseOnWorkoutSessionWhereInput) => {
   return await prisma.exerciseOnWorkoutSession.findMany({
      where: query,
   });
};

export default { createOne, findOne, createMany, findAll };
