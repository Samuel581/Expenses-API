import { Request, Response } from "express";
import { createUser, authenticateUser } from "../services/user.service";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        const { message } = error as Error;
        res.status(400).json({ message });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = await authenticateUser(req.body);
        if (!user) {
            res.status(400).json({ message: 'Invalid credentials' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        const { message } = error as Error;
        res.status(400).json({ message });
    }
}