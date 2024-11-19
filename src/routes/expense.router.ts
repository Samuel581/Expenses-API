import * as expenseController from '../controllers/expense..controller'
import { Router } from 'express'
import verifyToken from '../middlewares/auth.middleware';

const expenseRouter = Router();

expenseRouter.post('/', verifyToken, expenseController.createExpense);
expenseRouter.patch('/:id', verifyToken, expenseController.updateExpense);
expenseRouter.delete('/:id', verifyToken, expenseController.deleteExpense);
expenseRouter.get('/', verifyToken, expenseController.getAllExpenses);
expenseRouter.get('/:id', verifyToken, expenseController.getExpense)

export default expenseRouter;