import { Request, Response } from 'express';
import { ResponseModel } from '../shared/responseModel';
import * as CategoriaService from '../services/categoria.service';
import { STATUS_INTERNAL_SERVER_ERROR } from '../shared/constants';


export const listarCategorias = async (req: Request, res: Response) => {
    console.log('categorias.controller::listarCategorias');
    
    try {
        const categorias = await CategoriaService.listarCategorias();
        res.json(ResponseModel.success(categorias));
    } catch (error: any) {
       console.error(error.message);     
       res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }

}

export const obtenerCategoria = async (req: Request, res: Response) => {
    console.log('categorias.controller::obtenerCategoria');
    
}