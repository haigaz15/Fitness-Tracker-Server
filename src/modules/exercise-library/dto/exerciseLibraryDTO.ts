export interface ExerciseInput {
   name: string;
   type: string;
   description: string;
}
export class ExerciseDTO {
   name: string;
   type: string;
   description: string;
   constructor(exercise: ExerciseInput) {
      this.name = exercise.name;
      this.type = exercise.type;
      this.description = exercise.description;
   }
}
