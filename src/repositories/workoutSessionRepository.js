const { WorkoutSession } = require("../db/schemas/workoutSession");

const createOne = async (data) => {
  const workoutSession = new WorkoutSession(data);
  await workoutSession.save();
};

const findOneAndUpdate = async (query, updatedFields) => {
  await WorkoutSession.findOneAndUpdate(
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
module.exports = { createOne, findAll, findOneAndUpdate, findOne };
