import express from 'express';
import exerciseLibraryRouter from './routes/exercise-library/exerciseLibraryRoute';
import workoutSessionRouter from './routes/workout-session/workoutSessionRoute';
import authRourter from './routes/auth/authRoute';
import dotenv from 'dotenv';
dotenv.config();
// const db = require("./db/db");
import errorMiddleWare from './middlewares/errorMiddleware';
const app = express();

app.use(express.json());
app.use(exerciseLibraryRouter);
app.use(workoutSessionRouter);
app.use(authRourter);
app.use(errorMiddleWare);
async function initializeServer() {
   try {
      // await db.run();
      app.listen(process.env.PORT, () => {
         console.log(`Listing to PORT ${process.env.PORT}`);
      });
   } catch (error) {
      console.error('Failed to initilze the server', error);
   }
}

initializeServer();
