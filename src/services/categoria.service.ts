import { categorias, PrismaClient } from "@prisma/client";
import { Categorias } from '../models/categorias';
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";



const prisma = new PrismaClient();

export const listarCategorias = async () => {
    console.log('categoria.service::listarCategorias');
   
    const Categorias: Categorias[] = await prisma.categorias.findMany({
     where: {
       estado_auditoria: '1'
    },
      orderBy: {  
       id: 'asc' // Ordenena 
      }
    });

    return Categorias;
}

export const obtenerCategoria = async (id: number) => {
    console.log('categoria.service::obtenerCategoria');
    
    const categoria: categorias | null = await prisma.categorias.findUnique({
        where: {
            id: id
        }
    });

    return categoria;
}

export const insertarCategoria = async (Categorias: categorias) => {
    console.log('categoria.service::insertarCategoria');

    await prisma.categorias.create({
        data: {
            nombre: Categorias.nombre,
            descripcion: Categorias.descripcion,
            estado_auditoria: '1' // si es que está activo
        }
    });

    return RESPONSE_INSERT_OK;
}

export const modificarCategoria = async (id: number, Categorias: categorias) => {
    console.log('categoria.service::modificarCategoria');

    await prisma.categorias.update({
       
        where: {
            id: id
        },
        data: {
            ...Categorias,
            fecha_actualizacion: new Date()
        }

    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarCategoria = async (id: number) => {
    console.log('categoria.service::eliminarCategoria'); 

    await prisma.categorias.update({
        where: {
            id: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_DELETE_OK;

}
