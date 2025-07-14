import { PrismaClient } from "@prisma/client";
import { Curso } from "../models/curso"; 
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

export const listarCursos = async () => {
    console.log('cursosService::listarCursos');

    return await prisma.cursos.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id: 'asc'
        },
        include: {
            instructores: {
                include: {
                }
            },
            categorias: true 
        }
    });
}


export const obtenerCurso = async (id: number) => {
    console.log('cursosService::obtenerCurso');
    return await prisma.cursos.findUnique({
        where: {
            id: id
        }
    });
}

export const insertarCurso = async (curso: Curso) => {
    console.log('cursosService::insertarCurso');
    await prisma.cursos.create({
        data: {
            titulo: curso.titulo,
            descripcion: curso.descripcion,
            precio: curso.precio,
            categoria_id: curso.categoria_id,
            instructor_id: curso.instructor_id,
            duracion_horas: curso.duracion_horas,
            nivel: curso.nivel,
            activo: curso.activo,
            estado_auditoria: curso.estado_auditoria
        }
    });
    return RESPONSE_INSERT_OK;
}

export const modificarCurso = async (id: number, curso: Curso) => {
    console.log('cursosService::modificarCurso');
    await prisma.cursos.update({
        where: {
            id: id
        },
        data: {
            ...curso,
            fecha_actualizacion: new Date()
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarCurso = async (id: number) => {
    console.log('cursosService::eliminarCurso');
    await prisma.cursos.update({
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