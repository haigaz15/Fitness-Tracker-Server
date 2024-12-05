import { Exercise, ExerciseDifficulty, MuscleGroup } from '@prisma/client';
import {
   exerciseDifficultyRecordsInverse,
   muscleGroupRecordsInverse,
} from '../../exercise-library/exercise.type';

interface CreateWorkoutInput {
   workoutDate: Date;
   name: string;
   id: string;
   notes: string;
   exercises: WorkoutExerciseDTO[];
   userId: String | undefined;
}
export class CreateWorkoutDTO {
   workoutDate: Date;
   name: string;
   externalId: string;
   notes: string;
   exercises: WorkoutExerciseDTO[];
   userId: String | undefined;
   constructor(data: CreateWorkoutInput) {
      this.workoutDate = data.workoutDate;
      this.exercises = data.exercises;
      this.userId = data.userId;
      this.name = data.name;
      this.externalId = data.id;
      this.notes = data.notes;
   }
}

export interface WorkoutExerciseInput {
   name: string;
   set: number;
   reps: string;
   rest: string | null;
   weight: string | null;
   description?: string | null;
   primaryMuscle?: string;
   secondaryMuscles?: string;
   difficulty?: string;
}

export class WorkoutExerciseDTO {
   name: string;
   set: number;
   reps: string;
   rest: string | null;
   weight: string | null;
   description?: string | null;
   primaryMuscle?: string;
   secondaryMuscles?: string;
   difficulty?: string;
   constructor(data: WorkoutExerciseInput) {
      this.name = data.name;
      this.set = data.set;
      this.reps = data.reps;
      this.rest = data.rest;
      this.weight = data.weight;
      this.description = data.description;
      this.primaryMuscle =
         muscleGroupRecordsInverse[data.primaryMuscle as MuscleGroup];
      this.secondaryMuscles = data.secondaryMuscles;
      this.difficulty =
         exerciseDifficultyRecordsInverse[
            data.difficulty as ExerciseDifficulty
         ];
   }
}
interface WorkoutInput {
   workoutDate: Date | null;
   name: string;
   id: string;
   notes: string | null;
   startTime: Date | null;
   endTime: Date | null;
   exercises: WorkoutExerciseInput[];
}
export class WorkoutResponseDTO {
   workoutDate: Date | null;
   name: string;
   id: string;
   notes: string | null;
   startTime: Date | null;
   endTime: Date | null;
   exercises: WorkoutExerciseInput[];

   constructor(data: WorkoutInput) {
      this.workoutDate = data.workoutDate;
      this.name = data.name;
      this.id = data.id;
      this.notes = data.notes;
      this.exercises = data.exercises;
      this.startTime = data.startTime;
      this.endTime = data.endTime;
   }
}
interface StartWorkoutSessionInput {
   id: string;
   startTime: string;
}

export class StartWorkoutSessionRequestDTO {
   id: string;
   startTime: string;
   constructor(data: StartWorkoutSessionInput) {
      this.id = data.id;
      this.startTime = data.startTime;
   }
}

interface EndWorkoutSessionInput {
   id: string;
   endTime: string;
}

export class EndWorkoutSessionRequestDTO {
   id: string;
   endTime: string;
   constructor(data: EndWorkoutSessionInput) {
      this.id = data.id;
      this.endTime = data.endTime;
   }
}

interface EndWorkoutSessionResponseInput {
   workoutSessionId: string;
}

export class EndWorkoutSessionResponseDTO {
   workoutSessionId: string;
   constructor(data: EndWorkoutSessionResponseInput) {
      this.workoutSessionId = data.workoutSessionId;
   }
}

interface UpdateWorkoutSessionVolumeInput {
   totalReps: number;
   totalSets: number;
   totalWeight: number;
   totalRest: number;
}

export class UpdateWorkoutSessionVolumeRequestDTO {
   totalReps: number;
   totalSets: number;
   totalWeight: number;
   totalRest: number;
   constructor(data: UpdateWorkoutSessionVolumeInput) {
      this.totalReps = data.totalReps;
      this.totalSets = data.totalSets;
      this.totalWeight = data.totalWeight;
      this.totalRest = data.totalRest;
   }
}

export class UpdateWorkoutSessionVolumeResponseDTO {
   updatedSessionId: string;
   constructor(updatedSessionId: string) {
      this.updatedSessionId = updatedSessionId;
   }
}

export interface WorkoutSession {
   id: string;
   sessionTime: number;
   totalReps: number;
   totalSets: number;
   totalWeight: number;
   totalRest: number;
}

interface WorkoutWithWorkoutSessionInput {
   workoutDate: Date | null;
   name: string;
   id: string;
   notes: string | null;
   startTime: Date | null;
   endTime: Date | null;
   exercises: WorkoutExerciseInput[];
   workoutSessions: WorkoutSession[];
}

export class WorkoutWithWorkoutSessionsReponseDTO {
   workoutDate: Date | null;
   name: string;
   id: string;
   notes: string | null;
   startTime: Date | null;
   endTime: Date | null;
   exercises: WorkoutExerciseInput[];
   workoutSessions: WorkoutSession[];

   constructor(data: WorkoutWithWorkoutSessionInput) {
      this.workoutDate = data.workoutDate;
      this.name = data.name;
      this.id = data.id;
      this.notes = data.notes;
      this.exercises = data.exercises;
      this.workoutSessions = data.workoutSessions;
      this.startTime = data.startTime;
      this.endTime = data.endTime;
   }
}

interface UpdateWorkoutExerciseInput {
   name: string;
   set: number;
   reps: string;
   rest: string;
   weight: string;
}

export class UpdateWorkoutExerciseResponseDTO {
   name: string;
   set: number;
   reps: string;
   rest: string;
   weight: string;
   constructor(data: UpdateWorkoutExerciseInput) {
      this.name = data.name;
      this.set = data.set;
      this.reps = data.reps;
      this.rest = data.rest;
      this.weight = data.weight;
   }
}
