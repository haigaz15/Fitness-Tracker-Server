interface CreateWorkoutSessionInput {
   workoutDate: Date;
   name: string;
   exercises: WorkoutSessionExerciseDTO[];
   userId: String | undefined;
}
export class CreateWorkoutSessionDTO {
   workoutDate: Date;
   name: string;
   exercises: WorkoutSessionExerciseDTO[];
   userId: String | undefined;
   constructor(data: CreateWorkoutSessionInput) {
      this.workoutDate = data.workoutDate;
      this.exercises = data.exercises;
      this.userId = data.userId;
      this.name = data.name;
   }
}

export interface WorkoutSessionExerciseInput {
   exerciseName: string;
   set: number;
   reps: string;
   rest: string | null;
   weight: string | null;
}

export class WorkoutSessionExerciseDTO {
   exerciseName: string;
   set: number;
   reps: string;
   rest: string | null;
   weight: string | null;
   constructor(data: WorkoutSessionExerciseInput) {
      this.exerciseName = data.exerciseName;
      this.set = data.set;
      this.reps = data.reps;
      this.rest = data.rest;
      this.weight = data.weight;
   }
}

interface StartWorkoutSessionInput {
   id: string;
   startTime: string;
   endTime: string;
}
export class StartWorkoutSessionDTO {
   id: string;
   startTime: string;
   endTime: string;
   constructor(data: StartWorkoutSessionInput) {
      this.id = data.id;
      this.startTime = data.startTime;
      this.endTime = data.endTime;
   }
}
