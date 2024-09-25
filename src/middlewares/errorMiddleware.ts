import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const errorMiddleWare: ErrorRequestHandler = (
   err: any,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   console.log(err.stack);
   const statusCode = err.statusCode || 500;
   const message =
      statusCode === 500
         ? 'Internal Server Error'
         : err.message || 'Internal Server Error';

   res.status(statusCode).json({ error: { message, statusCode } });
};
export default errorMiddleWare;
