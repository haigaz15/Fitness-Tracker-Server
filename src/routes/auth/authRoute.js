const express = require("express");
const AuthController = require("../../modules/auth/auth.controller");
const router = express.Router();

router.post("/signup", AuthController.signUp);

router.post("/login", AuthController.logIn);

module.exports = router;
