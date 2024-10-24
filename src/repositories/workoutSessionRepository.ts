import prisma from '../core/prisma-client';
import {
   PrismaCreateWorkoutSession,
   PrismaUpdateWorkoutSession,
   PrismaWorkoutSession,
   PrismaWorkoutSessionUpdateInput,
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
const findAllWorkoutsWithExercises = async (
   query?: PrismaWorkoutSessionWhereInput
) => {
   return await prisma.workoutSession.findMany({
      where: query,
      select: {
         name: true,
         workoutDate: true,
         startTime: true,
         endTime: true,
         notes: true,
         exercises: {
            select: {
               exercise: {
                  select: { name: true },
               },
               set: true,
               reps: true,
               rest: true,
               weight: true,
            },
         },
      },
   });
};
const findOne = async (
   query: PrismaWorkoutSessionWhereUniqueInput
): Promise<PrismaWorkoutSession | null> => {
   return await prisma.workoutSession.findUnique({ where: query });
};

const updateOne = async (
   query: PrismaWorkoutSessionWhereUniqueInput,
   data: PrismaWorkoutSessionUpdateInput
) => {
   return await prisma.workoutSession.update({
      where: query,
      data,
   });
};
export default {
   createOne,
   findAll,
   findByIdAndUpdate,
   findOne,
   updateOne,
   findAllWorkoutsWithExercises,
};
