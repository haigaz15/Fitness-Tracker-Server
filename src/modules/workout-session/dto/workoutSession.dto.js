class ExerciseParentDTO {
  constructor(exerciseParent) {
    this.exercise = exerciseParent.exercise;
    this.set = exerciseParent.set;
    this.reps = exerciseParent.reps;
  }
}

class CreateWorkoutSessionDTO {
  constructor(data) {
    this.workoutDate = data.workoutDate;
    this.exercises = data.exercises;
  }
}

class StartWorkoutSessionDTO {
  constructor(data) {
    this.id = data.id;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
  }
}

module.exports = {
  ExerciseParentDTO,
  CreateWorkoutSessionDTO,
  StartWorkoutSessionDTO,
};
