import { registerUser, loginUser } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;