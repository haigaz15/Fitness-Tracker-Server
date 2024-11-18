import prisma from '../core/prisma-client';
import {
   PrismaCreateWorkout,
   PrismaUpdateWorkout,
   PrismaWorkout,
   PrismaWorkoutUpdateInput,
   PrismaWorkoutWhereInput,
   PrismaWorkoutWhereUniqueInput,
} from '../modules/workout/workout.prisma.type';

const createOne = async (data: PrismaCreateWorkout): Promise<PrismaWorkout> => {
   return await prisma.workout.create({ data });
};

const findByIdAndUpdate = async (
   query: PrismaWorkoutWhereUniqueInput,
   updatedFields: PrismaUpdateWorkout
): Promise<PrismaWorkout> => {
   return await prisma.workout.update({
      where: query,
      data: updatedFields,
   });
};

const findAll = async (
   query?: PrismaWorkoutWhereInput
): Promise<PrismaWorkout[]> => {
   return await prisma.workout.findMany({ where: query });
};
const findAllWorkoutsWithExercises = async (
   query?: PrismaWorkoutWhereInput
) => {
   return await prisma.workout.findMany({
      where: query,
      select: {
         externalId: true,
         name: true,
         workoutDate: true,
         startTime: true,
         endTime: true,
         notes: true,
         exercises: {
            select: {
               exercise: {
                  select: {
                     name: true,
                     description: true,
                     primaryMuscle: true,
                     secondaryMuscles: true,
                     difficulty: true,
                  },
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
   query: PrismaWorkoutWhereUniqueInput
): Promise<PrismaWorkout | null> => {
   return await prisma.workout.findUnique({ where: query });
};

const findOneWithWorkoutSession = async (
   query: PrismaWorkoutWhereUniqueInput
) => {
   return await prisma.workout.findUnique({
      where: query,
      include: {
         workoutSessions: true,
         exercises: {
            select: {
               exercise: {
                  select: {
                     name: true,
                  },
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
const updateOne = async (
   query: PrismaWorkoutWhereUniqueInput,
   data: PrismaWorkoutUpdateInput
) => {
   return await prisma.workout.update({
      where: query,
      data,
   });
};
const deleteAll = async () => {
   return await prisma.workout.deleteMany({});
};
export default {
   createOne,
   findAll,
   findByIdAndUpdate,
   findOne,
   updateOne,
   findAllWorkoutsWithExercises,
   deleteAll,
   findOneWithWorkoutSession,
};
