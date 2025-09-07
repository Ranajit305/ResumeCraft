import express from 'express'
import { checkAuth, login, logout, register } from '../controllers/user.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const userRouter = express.Router();

userRouter.get('/check-auth', verifyToken, checkAuth);
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', logout);

export default userRouter