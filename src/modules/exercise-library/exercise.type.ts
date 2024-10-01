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

export interface ExerciseEntity {
   name: string;
   type: string;
   description: string;
}
