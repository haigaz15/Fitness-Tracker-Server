import HTTP_ERROR_STATUS from './error-enums';

class APIError extends Error {
   statusCode: number;
   constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
   }
}

export default APIError;
