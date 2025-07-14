import { Request, Response } from "express";
import * as cursosService from "../services/cursos.service";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { cursoCrearSchema, cursoEditarSchema } from "../schemas/cursosSchema";

export const listarCursos = async (req: Request, res: Response): Promise<any> => {
    console.log('cursosController::listarCursos');
    try {
        const response = await cursosService.listarCursos();
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const obtenerCurso = async (req: Request, res: Response): Promise<any> => {
    console.log('cursosController::obtenerCurso');
    try {
        const { id } = req.params;
        const response = await cursosService.obtenerCurso(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const insertarCurso = async (req: Request, res: Response): Promise<any> => {
    console.log('cursosController::insertarCurso');

    const { error }: any = cursoCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const response = await cursosService.insertarCurso(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const modificarCurso = async (req: Request, res: Response): Promise<any> => {
    console.log('cursosController::modificarCurso');

    const { error }: any = cursoEditarSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const { id } = req.params;
        const response = await cursosService.modificarCurso(Number(id), req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const eliminarCurso = async (req: Request, res: Response): Promise<any> => {
    console.log('cursosController::eliminarCurso');
    try {
        const { id } = req.params;
        const response = await cursosService.eliminarCurso(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};
