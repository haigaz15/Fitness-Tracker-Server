const ExerciseLibraryService = require('./exerciseLibrary.service')

const getBarbellExercises = (req,res,next) => {
     res.send(ExerciseLibraryService.getBarbellExercises())
}

module.exports = {getBarbellExercises} 