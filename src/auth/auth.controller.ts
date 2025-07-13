import { Request, Response } from 'express';
import * as LoginService from './auth.service';
import { ResponseModel } from '../shared/responseModel';
import { STATUS_UNAUTHORIZED } from '../shared/constants';



export const loginAuth = async (req: Request, res: Response) => { 
    const { username, password } = req.body;

    try {
        const token = await LoginService.loginAuth(username, password);
        res.json(ResponseModel.success({ token }));
    } catch (error: any) {
        res.status(STATUS_UNAUTHORIZED).json({ error: error.message });
    }

}