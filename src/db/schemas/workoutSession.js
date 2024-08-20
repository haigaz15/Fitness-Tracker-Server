const mongoose = require("mongoose");
const { ExerciseSchema } = require("./exerciseSchema");

const WorkoutSessionSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    get: (v) => (v ? v.toTimeString().split(" ")[0] : null),
  },
  endTime: {
    type: Date,
    get: (v) => (v ? v.toTimeString().split(" ")[0] : null),
  },
  workoutDate: {
    type: Date,
    get: (v) => (v ? v.toISOString().split("T")[0] : null),
  },
  exercises: [
    {
      exercise: ExerciseSchema,
      set: { type: Number },
      reps: { type: String },
    },
  ],
});

const WorkoutSession = mongoose.model("workout-session", WorkoutSessionSchema);

module.exports = { WorkoutSession };
