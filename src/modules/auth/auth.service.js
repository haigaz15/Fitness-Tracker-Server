const { SignUpDTO } = require("./dto/auth.dto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const APIError = require("../../core/api-errors");
const UserRepository = require("../../repositories/userRepository");
require("dotenv").config();
const signUp = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    console.log(firstName);
    if (!firstName || !lastName || !username || !email || !password) {
      throw new APIError(
        "Either firstName, lastName, username, email, password or all are missing please fill before proceeding",
        400
      );
    }
    const user = await UserRepository.findOne({ username: username });
    if (user) {
      throw new APIError(`User with ${user.username} already exist`, 400);
    }
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    console.log(hashedPass);
    const u = new SignUpDTO({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashedPass,
    });

    await UserRepository.createOne(u);
  } catch (err) {
    throw err;
  }
};

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new APIError(`please provide username or password`, 400);
    }
    const user = await UserRepository.findOne({ username: username });
    if (!user) {
      throw new APIError(`User with Username: ${username} is not found`, 404);
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      throw new APIError("The provided password is wrong", 400);
    }
    const token = await jwt.sign(
      { username: username },
      process.env.JWT_SECRET
    );
    return token;
  } catch (err) {
    throw err;
  }
};

module.exports = { signUp, logIn };
