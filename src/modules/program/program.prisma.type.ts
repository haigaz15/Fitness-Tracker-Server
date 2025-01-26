import { Program, WorkoutOnProgram, Prisma } from '@prisma/client';

export type PrismaProgram = Program;

export type PrismaProgramCreate = Prisma.ProgramCreateInput;

export type PrismaProgramWhereInput = Prisma.ProgramWhereInput;

export type PrismaProgramWhereUniqueInput = Prisma.ProgramWhereUniqueInput;

export type PrismaWorkoutOnProgram = WorkoutOnProgram;

export type PrismaWorkoutOnProgramCreateManyInput =
   Prisma.WorkoutOnProgramCreateManyInput;
