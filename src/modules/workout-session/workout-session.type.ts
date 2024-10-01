import { ExerciseEntity } from '../exercise-library/exercise.type';

export interface WorkoutSessionExercise {
   exercise: ExerciseEntity;
   set: string;
   reps: string;
}
