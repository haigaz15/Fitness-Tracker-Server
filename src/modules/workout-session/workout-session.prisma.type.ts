import { Prisma, WorkoutSession } from '@prisma/client';

export type PrismaWorkoutSession = WorkoutSession;

export type PrismaCreateWorkoutSession = Prisma.WorkoutSessionCreateInput;

export type PrismaUpdateWorkoutSession = Prisma.WorkoutSessionUpdateInput;

export type PrismaWorkoutSessionWhereInput = Prisma.WorkoutSessionWhereInput;

export type PrismaWorkoutSessionWhereUniqueInput =
   Prisma.WorkoutSessionWhereUniqueInput;
