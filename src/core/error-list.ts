import APIError from './api-errors';
import HTTP_ERROR_STATUS, { HTTP_ERROR_MESSAGES } from './error-enums';

export const conflictError = (
   customMessage: string = 'Resource already exist'
) => {
   return new APIError(
      `${HTTP_ERROR_MESSAGES.CONFLICT_ERROR} ${customMessage}`,
      HTTP_ERROR_STATUS.CONFLICT_ERROR
   );
};

export const notFoundError = (
   customMessage: string = 'Resource could not be found'
) => {
   return new APIError(
      `${HTTP_ERROR_MESSAGES.NOT_FOUND_ERROR} ${customMessage}`,
      HTTP_ERROR_STATUS.NOT_FOUND
   );
};

export const badRequestError = (
   customMessage: string = 'request could not be completed'
) => {
   return new APIError(
      `${HTTP_ERROR_MESSAGES.BAD_REQUEST} ${customMessage}`,
      HTTP_ERROR_STATUS.BAD_REQUEST
   );
};
