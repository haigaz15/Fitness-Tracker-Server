import { Exercise, ExerciseOnWorkoutSession, Prisma } from '@prisma/client';

export enum ExerciseTypeEnum {
   barbell = 'barbell',
   dumbbell = 'dumbbell',
   cable = 'cable',
   bodyweight = 'bodyweight',
   kettle = 'kettle',
   all = 'all',
}
export interface ExerciseType {
   barbell?: string;
   dumbbell?: string;
   cable?: string;
   bodyweight?: string;
   kettle?: string;
   all?: string;
}
export type EquipmentType =
   | 'barbell'
   | 'dumbbell'
   | 'cable'
   | 'bodyweight'
   | 'kettle'
   | 'all';

export const exerciseTypes: Record<EquipmentType, string> = {
   barbell: 'barbell',
   dumbbell: 'dumbbell',
   cable: 'cable',
   bodyweight: 'bodyweight',
   kettle: 'kettle',
   all: 'all',
};

export type IExerciseWhereInput = Prisma.ExerciseWhereInput;

export type IExerciseWhereUniqueInput = Prisma.ExerciseWhereUniqueInput;

export type IExercise = Omit<Exercise, 'id'>;

export type ICreateExercise = Prisma.ExerciseCreateInput;

export type IExerciseOnWorkout = ExerciseOnWorkoutSession;
