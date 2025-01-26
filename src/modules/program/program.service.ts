import { Request, Response } from 'express';
import { ProgramRequestDTO } from './dto/programDTO';
import programRepository from '../../repositories/programRepository';
import { v4 as uuidv4 } from 'uuid';
import workoutRepository from '../../repositories/workoutRepository';
import { notFoundError } from '../../core/error-list';
import {
   CUSTOM_USER_ERROR_MESSAGES,
   CUSTOM_WORKOUT_MESSAGES,
} from '../../core/error-enums';
import workoutOnProgramRepository from '../../repositories/workoutOnProgram.Repository';
import { GetUserAuthInfoRequest } from '../../global-types/request.type';
import userRepository from '../../repositories/userRepository';
const createProgram = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const program = new ProgramRequestDTO(req.body);
      const user = await userRepository.findOne({
         username: req.user?.username,
      });
      if (!user) throw notFoundError(CUSTOM_USER_ERROR_MESSAGES.USER_NOT_FOUND);
      const createdProgram = await programRepository.createOne({
         externalId: uuidv4(),
         name: program.name,
         programStartTime: new Date(program.startDate),
         programEndTime: new Date(program.endDate),
         user: {
            connect: { id: user.id },
         },
      });
      const workouts = await workoutRepository.findAll({
         externalId: { in: program.workoutIds },
      });
      if (!workouts || workouts.length === 0) {
         throw notFoundError(CUSTOM_WORKOUT_MESSAGES.WORKOUTS_NOT_FOUND);
      }
      const workoutIds = workouts.map((workout) => workout.id);
      await workoutOnProgramRepository.createMany(
         workoutIds.map((workoutId) => {
            return {
               workoutId,
               programId: createdProgram.id,
            };
         })
      );
   } catch (err) {
      throw err;
   }
};

export default { createProgram };
