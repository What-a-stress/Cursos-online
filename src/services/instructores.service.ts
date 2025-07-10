import { PrismaClient } from "@prisma/client";
import { Instructor } from "../models/instructor";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();



export const listarInstructores = async () => {
  console.log('instructoresService::listarInstructores');
  return await prisma.instructores.findMany({
    where: {
      estado_auditoria: '1'
    },
    include: {
      usuarios: true //asegura que se incluya incluso si es null
    },
    orderBy: {
      id: 'asc'
    }
  });
};



export const obtenerInstructor = async (id: number) => {
    console.log('instructoresService::obtenerInstructor');
    return await prisma.instructores.findUnique({
        where: {
            id: id
        }
    });
}




export const insertarInstructor = async (instructor: Instructor) => {
    console.log('instructoresService::insertarInstructor');
    await prisma.instructores.create({
        data: {
            usuario_id: instructor.usuario_id,
            biografia: instructor.biografia,
            foto_url: instructor.foto_url,
            especialidad: instructor.especialidad,
            rating: instructor.rating,
            estado_auditoria: instructor.estado_auditoria
            // fecha_creacion se establece automáticamente por defecto en la BD
        }
    });
    return RESPONSE_INSERT_OK;
}



export const modificarInstructor = async (id: number, instructor: Instructor) => {
    console.log('instructoresService::modificarInstructor');
    await prisma.instructores.update({
        where: {
            id: id
        },
        data: {
            usuario_id: instructor.usuario_id,
            biografia: instructor.biografia,
            foto_url: instructor.foto_url,
            especialidad: instructor.especialidad,
            rating: instructor.rating,
            estado_auditoria: instructor.estado_auditoria

        }
    });
    return RESPONSE_UPDATE_OK;
}



export const eliminarInstructor = async (id: number) => {
    console.log('instructoresService::eliminarInstructor');
    await prisma.instructores.update({
        where: {
            id: id
        },
        data: {
            estado_auditoria: '0'
        }
    });
    return RESPONSE_DELETE_OK;
}