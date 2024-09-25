import { NextFunction, Request, Response } from 'express';

import AuthService from './auth.service';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
   try {
      await AuthService.signUp(req, res);
      res.status(201).json({ message: 'User sucessfully created!' });
   } catch (err) {
      next(err);
   }
};

const logIn = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const token = await AuthService.logIn(req, res);
      res.status(200).json({ 'Bearer Token: ': token });
   } catch (err) {
      next(err);
   }
};

export default { signUp, logIn };
