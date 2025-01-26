import { NextFunction, Request, Response } from 'express';
import ProgramService from './program.service';
import { HTTP_SUCCESS_MESSAGES } from '../../core/success-enums';

const createProgram = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const result = await ProgramService.createProgram(req, res);
      res.status(201).json({ message: HTTP_SUCCESS_MESSAGES, result });
   } catch (err) {
      next(err);
   }
};

export default { createProgram };
