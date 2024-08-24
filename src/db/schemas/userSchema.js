const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  workoutSession: [
    { type: mongoose.Schema.Types.ObjectId, ref: "workout-session" },
  ],
  chestSize: { type: Number },
  upperChestSize: { type: Number },
  lowerChestSize: { type: Number },
  shouldersSize: { type: Number },
  frontDeltsSize: { type: Number },
  sideDeltsSize: { type: Number },
  rearDeltsSize: { type: Number },
  trapsSize: { type: Number },
  latsSize: { type: Number },
  midBackSize: { type: Number },
  lowerBackSize: { type: Number },
  bicepsSize: { type: Number },
  tricepsSize: { type: Number },
  forearmsSize: { type: Number },
  absSize: { type: Number },
  obliquesSize: { type: Number },
  glutesSize: { type: Number },
  quadsSize: { type: Number },
  hamstringsSize: { type: Number },
  adductorsSize: { type: Number },
  calvesSize: { type: Number },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
