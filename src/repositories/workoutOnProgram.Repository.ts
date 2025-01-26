import prisma from '../core/prisma-client';
import {
   PrismaWorkoutOnProgram,
   PrismaWorkoutOnProgramCreateManyInput,
} from '../modules/program/program.prisma.type';

const createOne = async (data: PrismaWorkoutOnProgram) => {
   try {
      return await prisma.workoutOnProgram.create({ data });
   } catch (err) {
      throw err;
   }
};

const createMany = async (data: PrismaWorkoutOnProgramCreateManyInput[]) => {
   try {
      return await prisma.workoutOnProgram.createMany({ data });
   } catch (err) {
      throw err;
   }
};

export default { createOne, createMany };
