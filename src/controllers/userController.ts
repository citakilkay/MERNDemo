import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get Users' });
}

export const getUserById = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get by Id' });
}

export const updateUser = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get Update' });
}

export const deleteUser = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
}

export const createUser = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
}