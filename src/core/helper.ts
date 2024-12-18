import { ExerciseVoulmeItem } from '../modules/exercise-library/exercise.type';

export const calculateElapsedTime = (
   startTime: Date,
   endTime: Date
): number => {
   const elapsedMs = endTime.getTime() - startTime.getTime();
   return elapsedMs;
};

export const volumeToTotal = (volume: ExerciseVoulmeItem): number => {
   const volumeArr = volume.split('-');
   return volumeArr
      .map((volume) => Number(volume))
      .reduce((acc, curr) => {
         return acc + curr;
      });
};
