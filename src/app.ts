import express from 'express';
import exerciseLibraryRouter from './routes/exercise-library/exerciseLibraryRoute';
import workoutRouter from './routes/workout/workoutRoute';
import authRouter from './routes/auth/authRoute';
import workoutStatRouter from './routes/workout-stat/workoutStatRoute';
import userRouter from './routes/user/userRoute';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import errorMiddleWare from './middlewares/errorMiddleware';
import logger from './util/logger';
const app = express();
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(exerciseLibraryRouter);
app.use(workoutRouter);
app.use(workoutStatRouter);
app.use(userRouter);
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
