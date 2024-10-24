import { ExerciseEntity } from '../exercise-library/exercise.type';

export interface WorkoutSessionExercise {
   exercise: ExerciseEntity;
   set: string;
   reps: string;
}

export interface WorkoutSessionWithExercises {
   name: string;
   startTime: Date | null;
   endTime: Date | null;
   workoutDate: Date | null;
   notes: string | null;
   exercises: {
      name: string;
      set: number;
      reps: string;
      rest: string | null;
      weight: string | null;
   }[];
}
