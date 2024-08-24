const { WorkoutSession } = require("../db/schemas/workoutSession");

const createOne = async (data) => {
  const workoutSession = new WorkoutSession(data);
  await workoutSession.save();
  return workoutSession;
};

const findByIdAndUpdate = async (query, updatedFields) => {
  await WorkoutSession.findByIdAndUpdate(
    query,
    { $set: updatedFields },
    { new: true }
  );
};

const findAll = async (query) => {
  return await WorkoutSession.find(query);
};
const findOne = async (query) => {
  return await WorkoutSession.findOne(query);
};
module.exports = { createOne, findAll, findByIdAndUpdate, findOne };
