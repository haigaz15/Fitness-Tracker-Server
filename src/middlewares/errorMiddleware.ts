import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import logger from '../util/logger';
import HTTP_ERROR_STATUS, { HTTP_ERROR_MESSAGES } from '../core/error-enums';

const errorMiddleWare: ErrorRequestHandler = (
   err: any,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   logger.error(err.stack);
   const statusCode = err.statusCode || HTTP_ERROR_STATUS.INTERNAL_SERVER;
   const message =
      statusCode === HTTP_ERROR_STATUS.INTERNAL_SERVER
         ? HTTP_ERROR_MESSAGES.INTERNAL_SERVER_ERROR
         : err.message || HTTP_ERROR_MESSAGES.INTERNAL_SERVER_ERROR;

   res.status(statusCode).json({ error: { message, statusCode } });
};
export default errorMiddleWare;
