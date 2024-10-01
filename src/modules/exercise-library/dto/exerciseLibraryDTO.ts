import { ExerciseEntity } from '../exercise.type';

export class ExerciseDTO {
   name: string;
   type: string;
   description: string;
   constructor(exercise: ExerciseEntity) {
      this.name = exercise.name;
      this.type = exercise.type;
      this.description = exercise.description;
   }
}
