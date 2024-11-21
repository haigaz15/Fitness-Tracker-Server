interface HeightAndWeightInput {
   height: number;
   weight: number;
}

export class HeightAndWeightRequestDTO {
   height: number;
   weight: number;

   constructor(data: HeightAndWeightInput) {
      this.height = data.height;
      this.weight = data.weight;
   }
}
