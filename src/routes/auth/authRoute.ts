import express from 'express';
import AuthController from '../../modules/auth/auth.controller';
const router = express.Router();

router.post('/signup', AuthController.signUp);

router.post('/login', AuthController.logIn);

export default router;
