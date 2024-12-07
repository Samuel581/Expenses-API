import * as expenseController from '../controllers/expense..controller'
import { Router } from 'express'
import verifyToken from '../middlewares/auth.middleware';
import {validationMiddleware} from "../middlewares/validate.middleware";
import {CreateExpenseDTO, UpdateExpenseDTO} from "../DTO/expense.dto";

const expenseRouter = Router();

expenseRouter.post('/', verifyToken, validationMiddleware(CreateExpenseDTO), expenseController.createExpense);
expenseRouter.patch('/:id', verifyToken, validationMiddleware(UpdateExpenseDTO),expenseController.updateExpense);
expenseRouter.delete('/:id', verifyToken, expenseController.deleteExpense);
expenseRouter.get('/', verifyToken, expenseController.getAllExpenses);
expenseRouter.get('/:id', verifyToken, expenseController.getExpense)

export default expenseRouter;