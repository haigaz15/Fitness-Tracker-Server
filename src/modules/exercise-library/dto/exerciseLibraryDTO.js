class ExerciseDTO {
  constructor(exercise) {
    this.name = exercise.name;
    this.type = exercise.type;
    this.description = exercise.description;
  }
}

module.exports = { ExerciseDTO };
