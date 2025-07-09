import { Request, Response } from 'express';
import { ResponseModel } from '../shared/responseModel';
import * as InscripcionService from '../services/inscripcion.service';
import { STATUS_INTERNAL_SERVER_ERROR, STATUS_BAD_REQUEST } from '../shared/constants';
import { inscripcionCrearSchema } from "../schemas/inscripcionSchema";



export const listarInscripciones = async (req: Request, res: Response) => {
    console.log('inscripcion.controller::listarInscripciones');
    try {
        const inscripciones = await InscripcionService.listarInscripciones();
        res.json(ResponseModel.success(inscripciones));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};



export const obtenerInscripcion = async (req: Request, res: Response) => {
    console.log('inscripcion.controller::obtenerInscripcion');
    try {
        const { id } = req.params;
        const inscripcion = await InscripcionService.obtenerInscripcion(Number(id));
        res.json(ResponseModel.success(inscripcion));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};



export const insertarInscripcion = async (req: Request, res: Response): Promise<any> => {
    console.log('inscripcion.controller::insertarInscripcion');
    const { error } = inscripcionCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message));
    }

    try {
        const response = await InscripcionService.insertarInscripcion(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};



export const modificarInscripcion = async (req: Request, res: Response) => {
    console.log('inscripcion.controller::modificarInscripcion');
    try {
        const { id } = req.params;
        const response = await InscripcionService.modificarInscripcion(Number(id), req.body);
        res.json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};




export const eliminarInscripcion = async (req: Request, res: Response) => {
    console.log('inscripcion.controller::eliminarInscripcion');
    try {
        const { id } = req.params;
        const response = await InscripcionService.eliminarInscripcion(Number(id));
        res.json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};
