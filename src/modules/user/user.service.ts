import { Response } from 'express';
import { GetUserAuthInfoRequest } from '../../global-types/request.type';
import { HeightAndWeightRequestDTO } from './dto/user.dto';
import UserRepository from '../../repositories/userRepository';
import { notFoundError } from '../../core/error-list';
import { CUSTOM_USER_ERROR_MESSAGES } from '../../core/error-enums';
const updateUserBodyHeightAndWeight = async (
   req: GetUserAuthInfoRequest,
   res: Response
) => {
   try {
      const measurementsData = req.body;
      const newMeasurements = new HeightAndWeightRequestDTO(measurementsData);
      const user = await UserRepository.findOne({
         username: req.user.username,
      });

      if (!user) throw notFoundError(CUSTOM_USER_ERROR_MESSAGES.USER_NOT_FOUND);
      await UserRepository.updateOne(
         {
            username: req.user.username,
         },
         newMeasurements
      );
   } catch (err) {
      throw err;
   }
};

export default { updateUserBodyHeightAndWeight };
