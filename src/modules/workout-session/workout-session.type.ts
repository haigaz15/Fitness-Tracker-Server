import { Prisma, WorkoutSession } from '@prisma/client';

export type IWorkoutSession = WorkoutSession;

export type ICreateWorkoutSession = Prisma.WorkoutSessionCreateInput;

export type IUpdateWorkoutSession = Prisma.WorkoutSessionUpdateInput;

export type IWorkoutSessionWhereInput = Prisma.WorkoutSessionWhereInput;

export type IWorkoutSessionWhereUniqueInput =
   Prisma.WorkoutSessionWhereUniqueInput;
