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
   primaryMuscle: MuscleGroup;
   secondaryMuscles: string;
   category: ExerciseCategory;
   difficulty: ExerciseDifficulty;
}

export enum MuscleGroup {
   ABDUCTORS = 'ABDUCTORS',
   ADDUCTORS = 'ADDUCTORS',
   BICEPS = 'BICEPS',
   CALVES = 'CALVES',
   DELTOIDS = 'DELTOIDS',
   ERECTOR_SPINAE = 'ERECTOR_SPINAE',
   FOREARMS = 'FOREARMS',
   GLUTES = 'GLUTES',
   HAMSTRINGS = 'HAMSTRINGS',
   LATS = 'LATS',
   OBLIQUES = 'OBLIQUES',
   PECTORALS = 'PECTORALS',
   QUADRICEPS = 'QUADRICEPS',
   SERRATUS = 'SERRATUS',
   TRAPEZIUS = 'TRAPEZIUS',
   TRICEPS = 'TRICEPS',
   UPPER_ABS = 'UPPER_ABS',
   LOWER_ABS = 'LOWER_ABS',
   SOLEUS = 'SOLEUS',
   WRIST_FLEXORS = 'WRIST_FLEXORS',
   BRACHIORADIALIS = 'BRACHIORADIALIS',
   LOWER_BACK = 'LOWER_BACK',
}

export enum ExerciseCategory {
   CHEST = 'CHEST',
   SHOULDERS = 'SHOULDERS',
   LEGS = 'LEGS',
   ARMS = 'ARMS',
   BACK = 'BACK',
   CARDIO = 'CARDIO',
   STRETCH = 'STRETCH',
}

export enum ExerciseDifficulty {
   EASY = 'EASY',
   MEDIUM = 'MEDIUM',
   HARD = 'HARD',
}

export const muscleGroupRecords: Record<string, MuscleGroup> = {
   Abductors: MuscleGroup.ABDUCTORS,
   Adductors: MuscleGroup.ADDUCTORS,
   Biceps: MuscleGroup.BICEPS,
   Calves: MuscleGroup.CALVES,
   Deltoids: MuscleGroup.DELTOIDS,
   'Erector Spinae': MuscleGroup.ERECTOR_SPINAE,
   Forearms: MuscleGroup.FOREARMS,
   Glutes: MuscleGroup.GLUTES,
   Hamstrings: MuscleGroup.HAMSTRINGS,
   Lats: MuscleGroup.LATS,
   Obliques: MuscleGroup.OBLIQUES,
   Pectorals: MuscleGroup.PECTORALS,
   Quadriceps: MuscleGroup.QUADRICEPS,
   Serratus: MuscleGroup.SERRATUS,
   Trapezius: MuscleGroup.TRAPEZIUS,
   Triceps: MuscleGroup.TRICEPS,
   'Upper Abs': MuscleGroup.UPPER_ABS,
   'Lower Abs': MuscleGroup.LOWER_ABS,
   Soleus: MuscleGroup.SOLEUS,
   'Wrist Flexors': MuscleGroup.WRIST_FLEXORS,
   Brachioradialis: MuscleGroup.BRACHIORADIALIS,
   'Lower Back': MuscleGroup.LOWER_BACK,
};

export const exerciseCategoryRecords: Record<string, ExerciseCategory> = {
   Chest: ExerciseCategory.CHEST,
   Shoulders: ExerciseCategory.SHOULDERS,
   Legs: ExerciseCategory.LEGS,
   Arms: ExerciseCategory.ARMS,
   Back: ExerciseCategory.BACK,
   Cardio: ExerciseCategory.CARDIO,
   Stretch: ExerciseCategory.STRETCH,
};

export const exerciseDifficultyRecords: Record<string, ExerciseDifficulty> = {
   Easy: ExerciseDifficulty.EASY,
   Medium: ExerciseDifficulty.MEDIUM,
   Hard: ExerciseDifficulty.HARD,
};

export const muscleGroupRecordsInverse: Record<MuscleGroup, string> = {
   [MuscleGroup.ABDUCTORS]: 'Abductors',
   [MuscleGroup.ADDUCTORS]: 'Adductors',
   [MuscleGroup.BICEPS]: 'Biceps',
   [MuscleGroup.CALVES]: 'Calves',
   [MuscleGroup.DELTOIDS]: 'Deltoids',
   [MuscleGroup.ERECTOR_SPINAE]: 'Erector Spinae',
   [MuscleGroup.FOREARMS]: 'Forearms',
   [MuscleGroup.GLUTES]: 'Glutes',
   [MuscleGroup.HAMSTRINGS]: 'Hamstrings',
   [MuscleGroup.LATS]: 'Lats',
   [MuscleGroup.OBLIQUES]: 'Obliques',
   [MuscleGroup.PECTORALS]: 'Pectorals',
   [MuscleGroup.QUADRICEPS]: 'Quadriceps',
   [MuscleGroup.SERRATUS]: 'Serratus',
   [MuscleGroup.TRAPEZIUS]: 'Trapezius',
   [MuscleGroup.TRICEPS]: 'Triceps',
   [MuscleGroup.UPPER_ABS]: 'Upper Abs',
   [MuscleGroup.LOWER_ABS]: 'Lower Abs',
   [MuscleGroup.SOLEUS]: 'Soleus',
   [MuscleGroup.WRIST_FLEXORS]: 'Wrist Flexors',
   [MuscleGroup.BRACHIORADIALIS]: 'Brachioradialis',
   [MuscleGroup.LOWER_BACK]: 'Lower Back',
};

export const exerciseCategoryRecordsInverse: Record<ExerciseCategory, string> =
   {
      [ExerciseCategory.CHEST]: 'Chest',
      [ExerciseCategory.SHOULDERS]: 'Shoulders',
      [ExerciseCategory.LEGS]: 'Legs',
      [ExerciseCategory.ARMS]: 'Arms',
      [ExerciseCategory.BACK]: 'Back',
      [ExerciseCategory.CARDIO]: 'Cardio',
      [ExerciseCategory.STRETCH]: 'Stretch',
   };

export const exerciseDifficultyRecordsInverse: Record<
   ExerciseDifficulty,
   string
> = {
   [ExerciseDifficulty.EASY]: 'Easy',
   [ExerciseDifficulty.MEDIUM]: 'Medium',
   [ExerciseDifficulty.HARD]: 'Hard',
};
