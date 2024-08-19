const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
