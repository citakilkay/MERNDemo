import { Request, Response } from 'express';
import asynHandler from 'express-async-handler';

export const getCompanies = asynHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get Companies' });
})

export const getCompanyById = asynHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get by Id' });
})

export const updateCompany = asynHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
})

export const deleteCompany = asynHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
})

export const createCompany = asynHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
})