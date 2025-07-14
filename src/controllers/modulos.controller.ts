import { Request, Response } from 'express';
import { ResponseModel } from '../shared/responseModel';
import * as ModuloService from '../services/modulo.service';
import { STATUS_INTERNAL_SERVER_ERROR, STATUS_BAD_REQUEST } from '../shared/constants';
import { moduloCrearSchema  } from '../schemas/moduloSchema';



export const listarModulos = async (req: Request, res: Response) => {
    console.log('modulos.controller::listarModulos');

    try {
        const modulos = await ModuloService.listarModulos();
        res.json(ResponseModel.success(modulos));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};



export const obtenerModulo = async (req: Request, res: Response) => {
    console.log('modulos.controller::obtenerModulo');

    try {
        const { id } = req.params;
        const modulo = await ModuloService.obtenerModulo(Number(id));
        res.json(ResponseModel.success(modulo));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};



export const insertarModulo = async (req: Request, res: Response): Promise<any> => {
    console.log('modulos.controller::insertarModulo');

    const { error } = moduloCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message));
    }

    try {
        const response = await ModuloService.insertarModulo(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};




export const modificarModulo = async (req: Request, res: Response) => {
    console.log('modulos.controller::modificarModulo');

    try {
        const { id } = req.params;
        const response = await ModuloService.modificarModulo(Number(id), req.body);
        res.json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};




export const eliminarModulo = async (req: Request, res: Response) => {
    console.log('modulos.controller::eliminarModulo');

    try {
        const { id } = req.params;
        const response = await ModuloService.eliminarModulo(Number(id));
        res.json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};
