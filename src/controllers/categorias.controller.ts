import { Request, Response } from 'express';
import { ResponseModel } from '../shared/responseModel';
import * as CategoriaService from '../services/categoria.service';
import { STATUS_INTERNAL_SERVER_ERROR,STATUS_BAD_REQUEST } from '../shared/constants';
import { categoriaCrearSchema } from "../schemas/categoriaSchema";





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
    
     try {
        const {id} = req.params;
        const categoria = await CategoriaService.obtenerCategoria(Number(id));
        res.json(ResponseModel.success(categoria));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}


export const insertarCategoria = async (req: Request, res: Response): Promise<any> => {
    console.log('categoriasController::insertarCategoria');

    const { error } = categoriaCrearSchema.validate(req.body); 
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message)); 
    }

    try {
        const response = await CategoriaService.insertarCategoria(req.body);
        res.json(ResponseModel.success(response)); 
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};



export const modificarCategoria = async (req: Request, res: Response) => {
    console.log('categoria.service::modificarCategoria');

    try {
        const { id } = req.params;
        const response = await CategoriaService.modificarCategoria(Number(id), req.body);
        res.json(ResponseModel.success(null, response));

    }catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

    }
}


export const eliminarCategoria = async (req: Request, res: Response) => {
    console.log('categoria.service::modificarCategoria'); 
    
    try{
       const { id } = req.params;
       const response = await CategoriaService.eliminarCategoria(Number(id));
       res.json(ResponseModel.success(null, response));
       
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

    }
    


}
