enum HTTP_ERROR_STATUS {
   CONFLICT_ERROR = 409,
   BAD_REQUEST = 400,
   UNAUTHORIZED = 401,
   NOT_FOUND = 404,
   INTERNAL_SERVER = 500,
}

export enum CUSTOM_ERROR_MESSAGES {
   INCORRECT_EXCERCISE_TYPE = 'Incorrect exercise type!',
   EXERCISE_NOT_FOUND = 'Exercise could not be found! Please re-check your data',
   EXERCISE_EXIST = 'Exercise already already exist! Please try with different values',
   WORKOUT_SESSION_EXIST = 'Workout session already exist! Please try with different values',
   WORKOUT_SESSION_NOT_FOUND = 'Workout Session could not be found! Please re-check your data',
   WORKOUT_SESSIONS_NOT_FOUND = 'Workouot Sessions could not be found! Please re-check your data',
   USER_ALREADY_EXIST = 'User with sent username already exist',
   USER_DATA_MISSING_OR_WORNG = 'Either firstName, lastName, username, email, password or all are missing please fill before proceeding',
   MISSING_EXERCISE = 'Some exercises are missing please check again',
}

export enum HTTP_ERROR_MESSAGES {
   INTERNAL_SERVER_ERROR = 'Internal server error!',
   CONFLICT_ERROR = 'Conflict erros!',
   NOT_FOUND_ERROR = 'Not found error!',
   BAD_REQUEST = 'Bad request!',
}

export default HTTP_ERROR_STATUS;
