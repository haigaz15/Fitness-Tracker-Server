import {
   ExerciseCategory,
   exerciseCategoryRecords,
   exerciseCategoryRecordsInverse,
   ExerciseDifficulty,
   exerciseDifficultyRecords,
   exerciseDifficultyRecordsInverse,
   MuscleGroup,
   muscleGroupRecords,
   muscleGroupRecordsInverse,
} from '../exercise.type';

export interface ExerciseRequestInput {
   name: string;
   type: string;
   description: string;
   primaryMuscle: MuscleGroup;
   secondaryMuscles: string;
   category: ExerciseCategory;
   difficulty: ExerciseDifficulty;
}
export class ExerciseRequestDTO {
   name: string;
   type: string;
   description: string;
   primaryMuscle: MuscleGroup;
   secondaryMuscles: string;
   category: ExerciseCategory;
   difficulty: ExerciseDifficulty;

   constructor(exercise: ExerciseRequestInput) {
      this.name = exercise.name;
      this.type = exercise.type;
      this.description = exercise.description;
      this.primaryMuscle = muscleGroupRecords[
         exercise.primaryMuscle
      ] as MuscleGroup;
      this.secondaryMuscles = exercise.secondaryMuscles;
      this.category = exerciseCategoryRecords[
         exercise.category
      ] as ExerciseCategory;
      this.difficulty = exerciseDifficultyRecords[
         exercise.difficulty
      ] as ExerciseDifficulty;
   }
}
export interface ExerciseResponseInput {
   name: string;
   type: string;
   description: string;
   primaryMuscle: string;
   secondaryMuscles: string;
   category: string;
   difficulty: string;
}
export class ExerciseResponseDTO {
   name: string;
   type: string;
   description: string;
   primaryMuscle: string;
   secondaryMuscles: string;
   category: string;
   difficulty: string;

   constructor(exercise: ExerciseResponseInput) {
      this.name = exercise.name;
      this.type = exercise.type;
      this.description = exercise.description;
      this.primaryMuscle =
         muscleGroupRecordsInverse[exercise.primaryMuscle as MuscleGroup];
      this.secondaryMuscles = exercise.secondaryMuscles;
      this.category =
         exerciseCategoryRecordsInverse[exercise.category as ExerciseCategory];
      this.difficulty =
         exerciseDifficultyRecordsInverse[
            exercise.difficulty as ExerciseDifficulty
         ];
   }
}
