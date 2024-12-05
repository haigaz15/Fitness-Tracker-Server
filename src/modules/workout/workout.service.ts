import WorkoutRepository from '../../repositories/workoutRepository';
import UserRepository from '../../repositories/userRepository';
import ExerciseOnWorkoutRepository from '../../repositories/exerciseOnWorkoutRepository';
import ExerciseRepository from '../../repositories/exerciseRepository';
import { Request, Response } from 'express';
import { PrismaWorkout } from './workout.prisma.type';
import { badRequestError, notFoundError } from '../../core/error-list';
import {
   CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES,
   CUSTOM_EXERCISE_ERROR_MESSAGES,
   CUSTOM_WORKOUT_MESSAGES,
} from '../../core/error-enums';
import { GetUserAuthInfoRequest } from '../../global-types/request.type';
import {
   CreateWorkoutDTO,
   EndWorkoutSessionRequestDTO,
   EndWorkoutSessionResponseDTO,
   StartWorkoutSessionRequestDTO,
   UpdateWorkoutSessionVolumeRequestDTO,
   UpdateWorkoutSessionVolumeResponseDTO,
   WorkoutExerciseDTO,
   WorkoutExerciseInput,
   WorkoutResponseDTO,
   WorkoutWithWorkoutSessionsReponseDTO,
} from './dto/workout.dto';
import WorkoutSessionRepository from '../../repositories/workoutSessionRepository';
import { WorkoutWithExercises } from './workout.type';
import { v4 as uuidv4 } from 'uuid';
import { calculateElapsedTime, volumeToTotal } from '../../core/helper';
const createWorkout = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const workoutData = req.body;
      const exercises = workoutData.exercises.map(
         (exercise: WorkoutExerciseInput) => {
            return new WorkoutExerciseDTO(exercise);
         }
      );
      const user = await UserRepository.findOne({
         username: req.user.username,
      });

      const w = new CreateWorkoutDTO({
         name: workoutData.name,
         id: workoutData.id,
         workoutDate: workoutData.workoutDate,
         exercises: exercises,
         userId: user?.id,
         notes: workoutData.notes,
      });
      const workout = await WorkoutRepository.createOne({
         workoutDate: w.workoutDate,
         name: w.name,
         externalId: w.externalId,
         notes: w.notes,
         user: {
            connect: { id: w.userId as string },
         },
      });
      const exerciseNames = exercises.map(
         (exercise: WorkoutExerciseInput) => exercise.name
      );
      const dbExercises = await ExerciseRepository.findAll({
         name: { in: exerciseNames },
      });
      const exerciseNameIdMap: { [key: string]: string } = {};
      dbExercises?.forEach((exercise) => {
         exerciseNameIdMap[exercise.name] = exercise.id;
      });
      if (!dbExercises || dbExercises.length === 0) {
         throw notFoundError(CUSTOM_EXERCISE_ERROR_MESSAGES.EXERCISE_NOT_FOUND);
      }
      if (dbExercises.length !== exercises.length) {
         throw badRequestError(CUSTOM_EXERCISE_ERROR_MESSAGES.MISSING_EXERCISE);
      }
      await ExerciseOnWorkoutRepository.createMany(
         dbExercises?.map((e: any, index: number) => {
            return {
               exerciseIndex: index,
               rest: exercises[index].rest,
               weight: exercises[index].weight,
               set: exercises[index].set,
               reps: exercises[index].reps,
               workoutId: workout.id,
               exerciseId: exerciseNameIdMap[exercises[index].name],
            };
         })
      );
   } catch (err) {
      throw err;
   }
};

const startWorkoutSession = async (req: Request, res: Response) => {
   try {
      const startSessionData = req.body;
      const startSession = new StartWorkoutSessionRequestDTO(startSessionData);
      const Workout = await WorkoutRepository.findOne({
         externalId: startSession.id,
      });
      if (!Workout) {
         throw notFoundError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSIONS_NOT_FOUND
         );
      }

      const updatedWorkoutSession = WorkoutRepository.updateOne(
         { id: Workout.id },
         { startTime: startSessionData.startTime }
      );
      return updatedWorkoutSession;
   } catch (err) {
      throw err;
   }
};

const endWorkoutSession = async (
   req: Request,
   res: Response
): Promise<EndWorkoutSessionResponseDTO> => {
   try {
      const endSessionData = req.body;
      const endSession = new EndWorkoutSessionRequestDTO(endSessionData);
      const Workout = await WorkoutRepository.findOne({
         externalId: endSession.id,
      });
      if (!Workout) {
         throw notFoundError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSIONS_NOT_FOUND
         );
      }
      const updatedWorkout = await WorkoutRepository.updateOne(
         { id: Workout.id },
         { endTime: endSession.endTime }
      );
      const workoutSessionExternalId = uuidv4();
      const elapsedTime =
         updatedWorkout.startTime && updatedWorkout.endTime
            ? calculateElapsedTime(
                 updatedWorkout.startTime,
                 updatedWorkout.endTime
              )
            : 0;
      await WorkoutSessionRepository.createOne({
         externalId: workoutSessionExternalId,
         sessionDate: new Date(new Date().toISOString().split('T')[0]),
         sessionTime: elapsedTime,
         totalReps: 0,
         totalSets: 0,
         totalWeight: 0,
         totalRest: 0,
         workout: {
            connect: { id: updatedWorkout.id },
         },
      });
      return new EndWorkoutSessionResponseDTO({
         workoutSessionId: workoutSessionExternalId,
      });
   } catch (err) {
      throw err;
   }
};

const updateWorkoutSessionVolume = async (
   req: Request,
   res: Response
): Promise<UpdateWorkoutSessionVolumeResponseDTO> => {
   try {
      const { sessionId } = req.params;
      const workoutSessionVolume = new UpdateWorkoutSessionVolumeRequestDTO(
         req.body
      );
      const workoutSession = await WorkoutSessionRepository.findOne({
         externalId: sessionId,
      });
      if (!workoutSession)
         throw notFoundError(
            CUSTMO_WORKOUT_SESSION_ERROR_MESSAGES.WORKOUT_SESSIONS_NOT_FOUND
         );
      const updatedWorkoutSession = await WorkoutSessionRepository.updateOne(
         { externalId: sessionId },
         {
            totalSets: workoutSessionVolume.totalSets,
            totalReps: workoutSessionVolume.totalReps,
            totalRest: workoutSessionVolume.totalRest,
            totalWeight: workoutSessionVolume.totalWeight,
         }
      );
      return new UpdateWorkoutSessionVolumeResponseDTO(sessionId);
   } catch (err) {
      throw err;
   }
};

const updateWorkoutExercise = async (req: Request, res: Response) => {
   try {
      const { workoutId } = req.params;
      const exerciseData = new WorkoutExerciseDTO(req.body);
      const workout = await WorkoutRepository.findOne({
         externalId: workoutId,
      });
      if (!workout)
         throw notFoundError(CUSTOM_WORKOUT_MESSAGES.WORKOUTS_NOT_FOUND);
      const exercise = await ExerciseRepository.findOne({
         name: exerciseData.name,
      });
      if (!exercise)
         throw notFoundError(CUSTOM_EXERCISE_ERROR_MESSAGES.EXERCISE_NOT_FOUND);
      const exerciseOnWorkout = await ExerciseOnWorkoutRepository.findAll({
         workoutId: workout.id,
      });
      if (exerciseOnWorkout.length === 0) notFoundError();
      await ExerciseOnWorkoutRepository.createOne({
         exerciseIndex: exerciseOnWorkout.length,
         workoutId: workout.id,
         exerciseId: exercise.id,
         set: exerciseData.set,
         reps: exerciseData.reps,
         rest: exerciseData.rest,
         weight: exerciseData.weight,
      });
   } catch (err) {
      throw err;
   }
};

const retrieveWorkout = async (req: Request, res: Response) => {
   try {
      const { workoutId } = req.params;
      const workout = await WorkoutRepository.findOne({
         id: workoutId,
      });
      if (!workout) {
         throw notFoundError(CUSTOM_WORKOUT_MESSAGES.WORKOUT__NOT_FOUND);
      }
   } catch (err) {
      throw err;
   }
};

const retrieveWorkouts = async (
   req: Request,
   res: Response
): Promise<WorkoutResponseDTO[]> => {
   try {
      const workouts = await WorkoutRepository.findAllWorkoutsWithExercises();
      if (!workouts || workouts.length === 0) {
         throw notFoundError(CUSTOM_WORKOUT_MESSAGES.WORKOUTS_NOT_FOUND);
      }
      return workouts.map((workout) => {
         return new WorkoutResponseDTO({
            id: workout.externalId,
            name: workout.name,
            startTime: workout.startTime,
            endTime: workout.endTime,
            workoutDate: workout.workoutDate,
            notes: workout.notes,
            exercises: workout.exercises.map((exercise) => {
               return {
                  name: exercise.exercise.name,
                  set: exercise.set,
                  reps: exercise.reps,
                  rest: exercise.rest,
                  weight: exercise.weight,
                  description: exercise.exercise.description,
                  primaryMuscle: exercise.exercise.primaryMuscle,
                  secondaryMuscles: exercise.exercise.secondaryMuscles,
                  difficulty: exercise.exercise.difficulty,
               };
            }),
         });
      }) as WorkoutWithExercises[];
   } catch (err) {
      throw err;
   }
};

const retrieveWorkoutWithWorkoutSession = async (
   req: Request,
   res: Response
): Promise<WorkoutWithWorkoutSessionsReponseDTO> => {
   try {
      const { workoutId } = req.params;
      const workout = await WorkoutRepository.findOneWithWorkoutSession({
         externalId: workoutId,
      });
      if (!workout) {
         throw notFoundError(CUSTOM_WORKOUT_MESSAGES.WORKOUT__NOT_FOUND);
      }
      return new WorkoutWithWorkoutSessionsReponseDTO({
         id: workout.externalId,
         name: workout.name,
         workoutDate: workout.workoutDate,
         startTime: workout.startTime,
         endTime: workout.endTime,
         notes: workout.notes,
         exercises: workout.exercises.map((exercise) => {
            return {
               name: exercise.exercise.name,
               set: exercise.set,
               reps: exercise.reps,
               rest: exercise.rest,
               weight: exercise.weight,
            };
         }),
         workoutSessions: workout.workoutSessions.map((workoutSession) => {
            return {
               id: workoutSession.externalId,
               sessionTime: workoutSession.sessionTime,
               totalSets: workoutSession.totalSets,
               totalReps: workoutSession.totalReps,
               totalRest: workoutSession.totalRest,
               totalWeight: workoutSession.totalWeight,
            };
         }),
      });
   } catch (err) {
      throw err;
   }
};

const deleteWorkouts = async (req: Request, res: Response) => {
   try {
      const deletedWorkouts = await WorkoutRepository.deleteAll();
      return deletedWorkouts;
   } catch (err) {
      throw err;
   }
};
export default {
   createWorkout,
   startWorkoutSession,
   endWorkoutSession,
   retrieveWorkouts,
   retrieveWorkout,
   deleteWorkouts,
   updateWorkoutSessionVolume,
   retrieveWorkoutWithWorkoutSession,
   updateWorkoutExercise,
};
