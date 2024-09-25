import { IExercise } from '../exercise.type';

export class ExerciseDTO {
   name: string;
   type: string;
   description: string;
   constructor(exercise: IExercise) {
      this.name = exercise.name;
      this.type = exercise.type;
      this.description = exercise.description;
   }
}
