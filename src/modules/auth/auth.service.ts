import { Request, Response } from 'express';
import { SignUpDTO } from './dto/auth.dto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import APIError from '../../core/api-errors';
import UserRepository from '../../repositories/userRepository';
import dotenv from 'dotenv';
import { badRequestError, conflictError } from '../../core/error-list';
import { CUSTOM_USER_ERROR_MESSAGES } from '../../core/error-enums';
import { Role } from '../user/user.type';
dotenv.config();
const signUp = async (req: Request, res: Response) => {
   try {
      const { firstName, lastName, username, email, password } = req.body;
      if (!firstName || !lastName || !username || !email || !password) {
         throw badRequestError(
            CUSTOM_USER_ERROR_MESSAGES.USER_DATA_MISSING_OR_WORNG
         );
      }
      const user = await UserRepository.findOne({ username: username });
      if (user) {
         throw conflictError(CUSTOM_USER_ERROR_MESSAGES.USER_ALREADY_EXIST);
      }
      const saltRounds = 10;
      const hashedPass = await bcrypt.hash(password, saltRounds);
      const u = new SignUpDTO({
         firstName: firstName,
         lastName: lastName,
         username: username,
         email: email,
         password: hashedPass,
         role: Role.MEMBER,
      });
      await UserRepository.createOne(u);
   } catch (err) {
      throw err;
   }
};

const logIn = async (req: Request, res: Response) => {
   try {
      const { username, password } = req.body;
      if (!username || !password) {
         throw new APIError(`please provide username or password`, 400);
      }
      const user = await UserRepository.findOne({ username: username });
      if (!user) {
         throw new APIError(
            `User with Username: ${username} is not found`,
            404
         );
      }
      const matched = await bcrypt.compare(password, user.password);
      if (!matched) {
         throw new APIError('The provided password is wrong', 400);
      }
      let token;
      if (process.env.JWT_SECRET) {
         token = await jwt.sign(
            { username: username, role: user.role },
            process.env.JWT_SECRET
         );
      }

      return token;
   } catch (err) {
      throw err;
   }
};

export default { signUp, logIn };
