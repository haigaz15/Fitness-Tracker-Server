import express from 'express';
import ExerciseLibraryController from '../../modules/exercise-library/exerciseLibrary.controller';
import authMiddleWare from '../../middlewares/authMiddleware';
import { authRoleMiddleWare } from '../../middlewares/authRoleMiddleware';
const router = express.Router();

router.get(
   '/exercise-library/:type',
   ExerciseLibraryController.getExercisesByType
);

router.post(
   '/internal/exercise-library/',
   authMiddleWare,
   authRoleMiddleWare,
   ExerciseLibraryController.createExercise
);

export default router;
