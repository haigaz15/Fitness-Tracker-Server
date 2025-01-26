import express from 'express';
import ProgramController from '../../modules/program/program.controller';
import authMiddleWare from '../../middlewares/authMiddleware';

const route = express.Router();

route.post('/program', authMiddleWare, ProgramController.createProgram);

export default route;
