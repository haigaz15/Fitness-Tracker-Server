import prisma from '../core/prisma-client';
import {
   ICreateWorkoutSession,
   IUpdateWorkoutSession,
   IWorkoutSession,
   IWorkoutSessionWhereInput,
   IWorkoutSessionWhereUniqueInput,
} from '../modules/workout-session/workout-session.type';

const createOne = async (
   data: ICreateWorkoutSession
): Promise<IWorkoutSession> => {
   return await prisma.workoutSession.create({ data });
};

const findByIdAndUpdate = async (
   query: IWorkoutSessionWhereUniqueInput,
   updatedFields: IUpdateWorkoutSession
): Promise<IWorkoutSession> => {
   return await prisma.workoutSession.update({
      where: query,
      data: updatedFields,
   });
};

const findAll = async (
   query?: IWorkoutSessionWhereInput
): Promise<IWorkoutSession[]> => {
   return await prisma.workoutSession.findMany({ where: query });
};
const findOne = async (
   query: IWorkoutSessionWhereUniqueInput
): Promise<IWorkoutSession | null> => {
   return await prisma.workoutSession.findUnique({ where: query });
};
export default { createOne, findAll, findByIdAndUpdate, findOne };
