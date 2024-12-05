import { WorkoutSession } from '@prisma/client';
import prisma from '../core/prisma-client';
import {
   PrismaCreateWorkoutSession,
   PrismaWorkoutSession,
   PrismaWorkoutSessionUpdateInput,
   PrismaWorkoutSessionWhereInput,
   PrismaWorkoutSessionWhereUniqueInput,
} from '../modules/workout/workout-session.prisma.type';

const createOne = async (
   data: PrismaCreateWorkoutSession
): Promise<PrismaWorkoutSession> => {
   return await prisma.workoutSession.create({ data });
};
const findOne = async (
   query: PrismaWorkoutSessionWhereUniqueInput
): Promise<PrismaWorkoutSession | null> => {
   return await prisma.workoutSession.findUnique({ where: query });
};
const updateOne = async (
   query: PrismaWorkoutSessionWhereUniqueInput,
   data: PrismaWorkoutSessionUpdateInput
): Promise<WorkoutSession> => {
   return await prisma.workoutSession.update({
      where: query,
      data,
   });
};

const findAll = async (
   query?: PrismaWorkoutSessionWhereUniqueInput
): Promise<PrismaWorkoutSession[]> => {
   return await prisma.workoutSession.findMany({
      where: query,
   });
};

const groupWorkoutSessionsBySessionDate = async (
   query?: PrismaWorkoutSessionWhereInput
) => {
   return await prisma.workoutSession.groupBy({
      by: ['sessionDate'],
      _sum: {
         sessionTime: true,
         totalReps: true,
         totalSets: true,
         totalWeight: true,
         totalRest: true,
      },
      where: query,
      orderBy: {
         sessionDate: 'asc',
      },
   });
};

export default {
   createOne,
   updateOne,
   findOne,
   findAll,
   groupWorkoutSessionsBySessionDate,
};
