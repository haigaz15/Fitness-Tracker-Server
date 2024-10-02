interface CreateWorkoutSessionInput {
   workoutDate: Date;
   exercises: WorkoutSessionExerciseDTO[];
   userId: String | undefined;
}
export class CreateWorkoutSessionDTO {
   workoutDate: Date;
   exercises: WorkoutSessionExerciseDTO[];
   userId: String | undefined;
   constructor(data: CreateWorkoutSessionInput) {
      this.workoutDate = data.workoutDate;
      this.exercises = data.exercises;
      this.userId = data.userId;
   }
}

export interface WorkoutSessionExerciseInput {
   exerciseName: string;
   set: string;
   reps: string;
}

export class WorkoutSessionExerciseDTO {
   exerciseName: string;
   set: string;
   reps: string;
   constructor(data: WorkoutSessionExerciseInput) {
      this.exerciseName = data.exerciseName;
      this.set = data.set;
      this.reps = data.reps;
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
