import { Request, Response } from "express";
import * as instructoresService from "../services/instructores.service"; // Asume que existe un archivo instructoresService.ts
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { instructorCrearSchema } from "../schemas/instructoresSchema"; // Asume que existe un archivo instructorSchema.ts

export const listarInstructores = async (req: Request, res: Response): Promise<any> => {
    console.log('instructoresController::listarInstructores');
    try {
        const response = await instructoresService.listarInstructores();
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const obtenerInstructor = async (req: Request, res: Response): Promise<any> => {
    console.log('instructoresController::obtenerInstructor');
    try {
        const { id } = req.params;
        const response = await instructoresService.obtenerInstructor(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertarInstructor = async (req: Request, res: Response): Promise<any> => {
    console.log('instructoresController::insertarInstructor');
    const { error }: any = instructorCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    try {
        const response = await instructoresService.insertarInstructor(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarInstructor = async (req: Request, res: Response): Promise<any> => {
    console.log('instructoresController::modificarInstructor');
    try {
        const { id } = req.params;
        const response = await instructoresService.modificarInstructor(Number(id), req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarInstructor = async (req: Request, res: Response): Promise<any> => {
    console.log('instructoresController::eliminarInstructor');
    try {
        const { id } = req.params;
        const response = await instructoresService.eliminarInstructor(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}