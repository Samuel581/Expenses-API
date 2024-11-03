import expenseRouter from "./expense.router";
import userRouter from "./user.router";
import { Router } from "express";

const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/expense', expenseRouter);

export default mainRouter;