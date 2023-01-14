import { Request, Response } from 'express';

export const getCompanies = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get Companies' });
}

export const getCompanyById = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get by Id' });
}

export const updateCompany = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
}

export const deleteCompany = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
}

export const createCompany = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get cOMPAnies' });
}