import { Exercise, ExerciseOnWorkoutSession, Prisma } from '@prisma/client';

export type PrismaExerciseWhereInput = Prisma.ExerciseWhereInput;

export type PrismaExerciseWhereUniqueInput = Prisma.ExerciseWhereUniqueInput;

export type PrismaExercise = Omit<Exercise, 'id'>;

export type PrismaCreateExercise = Prisma.ExerciseCreateInput;

export type PrismaExerciseOnWorkout = ExerciseOnWorkoutSession;
