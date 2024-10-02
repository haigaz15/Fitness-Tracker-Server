import { NextFunction, Request, Response } from 'express';
import { GetUserAuthInfoRequest } from '../global-types/request.type';
import { Role } from '../modules/user/user.type';
import { unauthorizedError } from '../core/error-list';
import { CUSTOM_AUTH_ERROR_MESSAGES } from '../core/error-enums';

export const authRoleMiddleWare = (
   req: GetUserAuthInfoRequest,
   res: Response,
   next: NextFunction
) => {
   if (req.user.role !== Role.ADMIN)
      throw unauthorizedError(CUSTOM_AUTH_ERROR_MESSAGES.UNAUTHORIZED_ROLE);
   next();
};
