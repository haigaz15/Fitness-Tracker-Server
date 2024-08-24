const { User } = require("../db/schemas/userSchema");

const createOne = async (data) => {
  const user = new User(data);
  await user.save();
};

const findOne = async (query) => {
  return await User.findOne(query);
};

const findByIdAndUpdate = async (query, data) => {
  await User.findByIdAndUpdate(query, data);
};

module.exports = { createOne, findOne, findByIdAndUpdate };
