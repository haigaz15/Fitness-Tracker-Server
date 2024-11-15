import { ExerciseVoulmeItem } from '../modules/exercise-library/exercise.type';

export const calculateElapsedTime = (startTime: Date, endTime: Date): Date => {
   const elapsedMs = endTime.getTime() - startTime.getTime();
   return new Date(elapsedMs);
};

export const volumeToTotal = (volume: ExerciseVoulmeItem): number => {
   const volumeArr = volume.split('-');
   return volumeArr
      .map((volume) => Number(volume))
      .reduce((acc, curr) => {
         return acc + curr;
      });
};
