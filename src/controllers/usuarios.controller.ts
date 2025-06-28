import { Request, Response } from "express";
import * as usuariosService from "../services/usuarios.service"; // Asume que existe un archivo usuariosService.ts
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { usuarioCrearSchema } from "../schemas/usuariosSchema"; // Asume que existe un archivo usuarioSchema.ts

export const listarUsuarios = async (req: Request, res: Response): Promise<any> => {
    console.log('usuariosController::listarUsuarios');
    try {
        const response = await usuariosService.listarUsuarios();
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const obtenerUsuario = async (req: Request, res: Response): Promise<any> => {
    console.log('usuariosController::obtenerUsuario');
    try {
        const { id } = req.params;
        const response = await usuariosService.obtenerUsuario(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertarUsuario = async (req: Request, res: Response): Promise<any> => {
    console.log('usuariosController::insertarUsuario');
    const { error }: any = usuarioCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    try {
        const response = await usuariosService.insertarUsuario(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarUsuario = async (req: Request, res: Response): Promise<any> => {
    console.log('usuariosController::modificarUsuario');
    try {
        const { id } = req.params;
        const response = await usuariosService.modificarUsuario(Number(id), req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarUsuario = async (req: Request, res: Response): Promise<any> => {
    console.log('usuariosController::eliminarUsuario');
    try {
        const { id } = req.params;
        const response = await usuariosService.eliminarUsuario(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}