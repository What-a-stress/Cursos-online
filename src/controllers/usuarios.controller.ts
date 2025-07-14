import { Request, Response } from "express";
import * as usuariosService from "../services/usuarios.service"; 
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { usuarioCrearSchema } from "../schemas/usuariosSchema"; 
import { PrismaClient } from '@prisma/client';
import { comparePassword } from '../utils/bcrypt';
import { signToken } from '../auth/jwt';
import { loginAuth } from '../auth/auth.service';


const prisma = new PrismaClient(); 


export const listarUsuarios = async (req: Request, res: Response): Promise<any> => {
  console.log('usuariosController::listarUsuarios');
  try {
    const response = await usuariosService.listarUsuarios(); // aquí lo estoy mapeando
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



//aquí puse la lógica para el login, no hay nada en el service

export const loginUsuario = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    const { token, usuario } = await loginAuth(email, password);

    return res.status(200).json({
      success: true,
      message: 'Inicio de sesión exitoso',
      token,
      usuario
    });

  } catch (error: any) {
    console.error('Error en login:', error.message);
    return res.status(401).json({ success: false, message: error.message });
  }
}