const { User } = require("../db/schemas/userSchema");

const createOne = async (data) => {
  const user = new User(data);
  await user.save();
};

const findOne = async (query) => {
  return await User.findOne(query);
};

module.exports = { createOne, findOne };
