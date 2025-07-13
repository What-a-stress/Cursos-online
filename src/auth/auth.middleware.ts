import { NextFunction, Request, Response } from "express";
import { ResponseModel } from "../shared/responseModel";
import { verifyToken } from './jwt';
import { STATUS_UNAUTHORIZED } from "../shared/constants";




export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(STATUS_UNAUTHORIZED).json(ResponseModel.error('Token no proporcionado'));
    }

    const token = header.split(' ')[1]; 

    try {
        const decoded = verifyToken(token);
        (req as any).user = decoded;
        next();
    } catch (error: any) {
        return res.status(401).json(ResponseModel.error('Token inválido'));
    }
};