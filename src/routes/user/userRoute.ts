import express from 'express';
import authMiddleWare from '../../middlewares/authMiddleware';
import UserController from '../../modules/user/user.controller';

const router = express.Router();

router.put(
   '/user/weight-height',
   authMiddleWare,
   UserController.updateUserBodyHeightAndWeight
);

export default router;
