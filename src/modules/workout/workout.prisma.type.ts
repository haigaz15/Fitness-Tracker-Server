import { Prisma, Workout } from '@prisma/client';

export type PrismaWorkout = Workout;

export type PrismaCreateWorkout = Prisma.WorkoutCreateInput;

export type PrismaUpdateWorkout = Prisma.WorkoutUpdateInput;

export type PrismaWorkoutWhereInput = Prisma.WorkoutWhereInput;

export type PrismaWorkoutWhereUniqueInput = Prisma.WorkoutWhereUniqueInput;
export type PrismaWorkoutUpdateInput = Prisma.WorkoutUpdateInput;
