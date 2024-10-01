import prisma from '../core/prisma-client';
import {
   PrismaCreateWorkoutSession,
   PrismaUpdateWorkoutSession,
   PrismaWorkoutSession,
   PrismaWorkoutSessionWhereInput,
   PrismaWorkoutSessionWhereUniqueInput,
} from '../modules/workout-session/workout-session.prisma.type';

const createOne = async (
   data: PrismaCreateWorkoutSession
): Promise<PrismaWorkoutSession> => {
   return await prisma.workoutSession.create({ data });
};

const findByIdAndUpdate = async (
   query: PrismaWorkoutSessionWhereUniqueInput,
   updatedFields: PrismaUpdateWorkoutSession
): Promise<PrismaWorkoutSession> => {
   return await prisma.workoutSession.update({
      where: query,
      data: updatedFields,
   });
};

const findAll = async (
   query?: PrismaWorkoutSessionWhereInput
): Promise<PrismaWorkoutSession[]> => {
   return await prisma.workoutSession.findMany({ where: query });
};
const findOne = async (
   query: PrismaWorkoutSessionWhereUniqueInput
): Promise<PrismaWorkoutSession | null> => {
   return await prisma.workoutSession.findUnique({ where: query });
};
export default { createOne, findAll, findByIdAndUpdate, findOne };
