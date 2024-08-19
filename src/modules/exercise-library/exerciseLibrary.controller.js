const ExerciseLibraryService = require('./exerciseLibrary.service')

const getBarbellExercises = async (req,res,next) => {
     const exercises = await ExerciseLibraryService.getBarbellExercises()
     res.send(exercises)
}

const createExercise = async (req,res,next) => {
     await ExerciseLibraryService.createExercise()
     res.send({message:"Exercise sucessfully created",status:201})
}

module.exports = {getBarbellExercises,createExercise} 