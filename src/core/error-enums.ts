enum HTTP_ERROR_STATUS {
   CONFLICT_ERROR = 409,
   BAD_REQUEST = 400,
   UNAUTHORIZED = 401,
   NOT_FOUND = 404,
   INTERNAL_SERVER = 500,
}
export enum CUSTOM_AUTH_ERROR_MESSAGES {
   UNAUTHORIZED_ROLE = 'Could not completed the request. User is not admin',
}
export enum CUSTOM_EXERCISE_ERROR_MESSAGES {
   INCORRECT_EXCERCISE_TYPE = 'Incorrect exercise type!',
   EXERCISE_NOT_FOUND = 'Exercise could not be found! Please re-check your data',
   EXERCISE_EXIST = 'Exercise already already exist! Please try with different values',
   MISSING_EXERCISE = 'Some exercises are missing please check again',
}
export enum CUSTOM_USER_ERROR_MESSAGES {
   USER_ALREADY_EXIST = 'User with sent username already exist',
   USER_DATA_MISSING_OR_WORNG = 'Either firstName, lastName, username, email, password or all are missing please fill before proceeding',
}

export enum CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES {
   WORKOUT_SESSION_EXIST = 'Workout session already exist! Please try with different values',
   WORKOUT_SESSION_NOT_FOUND = 'Workout Session could not be found! Please re-check your data',
   WORKOUT_SESSIONS_NOT_FOUND = 'Workouot Sessions could not be found! Please re-check your data',
   WORKOUT_SESSION_UPDATE_START_NOT_END = 'End time is provided but the session is start',
   WORKOUT_SESSION_UPDATE_END_NOT_START = 'Start time is provided but the session is end',
   WORKOUT_SESSION_UPDATE_NO_START = 'Start time is empty please provide the start time',
   WORKOUT_SESSION_UPDATE_NO_END = 'End time is empty please provide the End time',
}

export enum HTTP_ERROR_MESSAGES {
   INTERNAL_SERVER_ERROR = 'Internal server error!',
   CONFLICT_ERROR = 'Conflict erros!',
   NOT_FOUND_ERROR = 'Not found error!',
   BAD_REQUEST = 'Bad request!',
   UNAUTHORIZED = 'unauthorized!',
}

export default HTTP_ERROR_STATUS;
