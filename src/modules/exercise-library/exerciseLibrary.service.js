const ExerciseRepository = require("../../repositories/exerciseRepository");

const getBarbellExercises = async (req, res) => {
  return await ExerciseRepository.findAll({ type: "barbell" });
};

const createExercise = async (req, res) => {
  //   await ExerciseRepository.createOne({
  //     name: "Barbell Bench Press",
  //     type: "barbell",
  //     description:
  //       "Begin by lying flat on the bench, with your body in a natural and relaxed position.Put your arms straight out to either side of you, and then bend your elbows, bringing your hands up to touch the bar.Begin with just the bar weight to warm up before heavy lifting.Lift the bar up, slowly bring it down to just above your sternum, and explode upward for one rep.",
  //   });
  await ExerciseRepository.createOne({
    name: "Barbell Bench Press",
    type: "dumbbell",
    description:
      "Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).Contract the chest and push the dumbbells back up to the starting position.Repeat for the desired number of repetitions.",
  });
};

module.exports = { getBarbellExercises, createExercise };
