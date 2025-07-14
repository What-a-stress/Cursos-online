import { Request, Response } from "express";
import * as usuariosService from "../services/usuarios.service";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { usuarioCrearSchema, usuarioEditarSchema } from "../schemas/usuariosSchema";
import { PrismaClient } from '@prisma/client';
import { loginAuth } from '../auth/auth.service';

const prisma = new PrismaClient();

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
  const { error } = usuarioCrearSchema.validate(req.body);
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
  const { error } = usuarioEditarSchema.validate(req.body);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
  }

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

export const loginUsuario = async (req: Request, res: Response): Promise<any> => {
  console.log('usuariosController::loginUsuario');
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
