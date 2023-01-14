import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get Users' });
}

export const getUserById = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get by Id' });
}

export const updateUser = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get Update' });
}

export const deleteUser = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
}

export const createUser = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
}