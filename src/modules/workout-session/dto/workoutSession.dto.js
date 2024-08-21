class ExerciseDTO {
  constructor(exercise) {
    this.name = exercise.name;
    this.type = exercise.type;
    this.description = exercise.description;
  }
}

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

module.exports = { ExerciseDTO, ExerciseParentDTO, CreateWorkoutSessionDTO };
