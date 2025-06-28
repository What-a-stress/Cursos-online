import { PrismaClient } from "@prisma/client";
import { Categorias } from '../models/categorias';



const prisma = new PrismaClient();

export const listarCategorias = async () => {
    console.log('categoria.service::listarCategorias');
   
    const Categorias: Categorias[] = await prisma.categorias.findMany({
     where: {
       estado_auditoria: '1'
    },
      orderBy: {  
       id: 'asc' // Ordenar por id de forma ascendente
      }
    });

    return Categorias;
}
