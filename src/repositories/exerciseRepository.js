const Exercise = require("../db/schemas/exerciseSchema");

const findOne = async (query) => {
  return await Exercise.findOne(query);
};

const findAll = async (query) => {
    return await Exercise.find(query);
}

const createOne = async (data) => {
    const exercise = new Exercise(data)
    await exercise.save()
}

const insertMany = async (data) => {
    await Exercise.insertMany(data);
} 

module.exports = { findOne,createOne,insertMany,findAll };
