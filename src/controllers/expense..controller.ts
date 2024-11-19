import { Request, Response } from "express";
import * as expenseService from "../services/expense.service";

export const createExpense = async (req: Request, res: Response) => {
    try {
        const newExpense = await expenseService.createExpense(req.body);
        res.status(201).send(newExpense);
    } catch (error) {
        const { message } = error as Error;
        res.status(400).json({ message });
    }
}

export const updateExpense = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {ownerId} = req.body;
        const updatedExpense = await expenseService.updateExpense(id,ownerId, req.body);
        res.status(201).send(updatedExpense);
    } catch (error) {
        const { message } = error as Error;
        res.status(400).json({ message });
    }
}

export const deleteExpense = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {ownerId} = req.body;
        const deletedExpense = await expenseService.deleteExpense(id, ownerId);
        res.status(200).send(deletedExpense);
    } catch (error) {
        const { message } = error as Error;
        res.status(400).json({ message });
    }
}

export const getAllExpenses = async(req: Request, res: Response) => {
    try {
        const {ownerId} = req.body;
        const allExpensesByOwner = await expenseService.getExpenses({ownerId});
        res.status(200).send(allExpensesByOwner);
    } catch (error) {
        const { message } = error as Error;
        res.status(400).json({ message });
    }
}

export const getExpense = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const uniqueExpense = await expenseService.getExpense(id);
        res.status(200).send(uniqueExpense);
    }
    catch (error) {
        const { message } = error as Error;
        res.status(400).json({ message });
    }
}