import { categorias, PrismaClient } from "@prisma/client";
import { Categorias } from '../models/categorias';



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
