export interface ProgramRequestInput {
   id: string;
   name: string;
   startDate: Date;
   endDate: Date;
   workoutIds: string[];
}

export class ProgramRequestDTO {
   name: string;
   startDate: Date;
   endDate: Date;
   workoutIds: string[];

   constructor(input: ProgramRequestInput) {
      this.name = input.name;
      this.startDate = input.startDate;
      this.endDate = input.endDate;
      this.workoutIds = input.workoutIds;
   }
}
