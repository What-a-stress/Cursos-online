import { modulos, PrismaClient } from "@prisma/client";
import { Modulo } from "../models/modulos";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();



export const listarModulos = async () => {
    console.log("modulo.service::listarModulos");

    const modulosList: Modulo[] = await prisma.modulos.findMany({
        where: {
            estado_auditoria: "1"
        },
        orderBy: {
            id: "asc"
        }
    });

    return modulosList;
};




export const obtenerModulo = async (id: number) => {
    console.log("modulo.service::obtenerModulo");

    const modulo: modulos | null = await prisma.modulos.findUnique({
        where: { id }
    });

    return modulo;
};

export const insertarModulo = async (nuevoModulo: modulos) => {
    console.log("modulo.service::insertarModulo");

    await prisma.modulos.create({
        data: {
            curso_id: nuevoModulo.curso_id,
            titulo: nuevoModulo.titulo,
            descripcion: nuevoModulo.descripcion,
            orden: nuevoModulo.orden,
            estado_auditoria: "1"
        }
    });

    return RESPONSE_INSERT_OK;
};




export const modificarModulo = async (id: number, datosModulo: modulos) => {
    console.log("modulo.service::modificarModulo");

    await prisma.modulos.update({
        where: { id },
        data: {
            ...datosModulo,
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_UPDATE_OK;
};




export const eliminarModulo = async (id: number) => {
    console.log("modulo.service::eliminarModulo");

    await prisma.modulos.update({
        where: { id },
        data: {
            estado_auditoria: "0",
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_DELETE_OK;
};
