import { Prisma, WorkoutSession } from '@prisma/client';

export type PrismaWorkoutSession = WorkoutSession;

export type PrismaCreateWorkoutSession = Prisma.WorkoutSessionCreateInput;

export type PrismaWorkoutSessionWhereUniqueInput =
   Prisma.WorkoutSessionWhereUniqueInput;

export type PrismaWorkoutSessionWhereInput = Prisma.WorkoutSessionWhereInput;

export type PrismaWorkoutSessionUpdateInput = Prisma.WorkoutSessionUpdateInput;
