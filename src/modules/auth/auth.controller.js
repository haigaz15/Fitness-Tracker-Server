const AuthService = require("./auth.service");

const signUp = async (req, res, next) => {
  try {
    await AuthService.signUp(req, res);
    res.status(201).json({ message: "User sucessfully created!" });
  } catch (err) {
    next(err);
  }
};

const logIn = async (req, res, next) => {
  try {
    const token = await AuthService.logIn(req, res);
    res.status(200).json({ "Bearer Token: ": token });
  } catch (err) {
    next(err);
  }
};

module.exports = { signUp, logIn };
