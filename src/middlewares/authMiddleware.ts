import { NextFunction, Request, RequestHandler, Response } from 'express';
import { IGetUserAuthInfoRequest } from '../types/request.type';
import APIError from '../core/api-errors';
import jwt from 'jsonwebtoken';
require('dotenv').config();
const authMiddleWare = async (
   req: IGetUserAuthInfoRequest,
   res: Response,
   next: NextFunction
) => {
   try {
      const token = req.headers?.authorization?.split(' ')[1];
      if (!token) {
         throw new APIError('Unauthorized', 401);
      }
      if (process.env.JWT_SECRET) {
         const decoded = await jwt.verify(token, process.env.JWT_SECRET);
         req.user = decoded;
      }
      next();
   } catch (err) {
      if (err instanceof jwt.JsonWebTokenError) {
         next(new APIError('Invalid Token', 401));
      }
      next(err);
   }
};

export default authMiddleWare;
