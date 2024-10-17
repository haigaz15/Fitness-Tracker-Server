import express from 'express';
import exerciseLibraryRouter from './routes/exercise-library/exerciseLibraryRoute';
import workoutSessionRouter from './routes/workout-session/workoutSessionRoute';
import authRourter from './routes/auth/authRoute';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import errorMiddleWare from './middlewares/errorMiddleware';
import logger from './util/logger';
const app = express();
app.use(cors());
app.use(express.json());
app.use(exerciseLibraryRouter);
app.use(workoutSessionRouter);
app.use(authRourter);
app.use(errorMiddleWare);
async function initializeServer() {
   try {
      app.listen(process.env.PORT, () => {
         logger.info(`Listing to PORT ${process.env.PORT}`);
      });
   } catch (error) {
      logger.error('Failed to initilze the server', error);
   }
}

initializeServer();
