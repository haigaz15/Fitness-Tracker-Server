import { NextFunction, Request, Response } from 'express';
import UserService from './user.service';
import { HTTP_SUCCESS_MESSAGES } from '../../core/success-enums';

const updateUserBodyHeightAndWeight = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      await UserService.updateUserBodyHeightAndWeight(req, res);
      res.json({
         message: HTTP_SUCCESS_MESSAGES.UPDATED,
         status: 200,
      });
   } catch (err) {
      next(err);
   }
};

export default { updateUserBodyHeightAndWeight };
