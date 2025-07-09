import { PrismaClient, inscripciones } from "@prisma/client";
import { Inscripcion } from "../models/inscripcion";
import {
  RESPONSE_DELETE_OK,
  RESPONSE_INSERT_OK,
  RESPONSE_UPDATE_OK
} from "../shared/constants";

const prisma = new PrismaClient();

export const listarInscripciones = async () => {
  console.log("inscripcionesService::listarInscripciones");

  return await prisma.inscripciones.findMany({
    where: {
      estado_auditoria: "1"
    },
    orderBy: {
      id: "asc"
    }
  });
};

export const obtenerInscripcion = async (id: number) => {
  console.log("inscripcionesService::obtenerInscripcion");

  return await prisma.inscripciones.findUnique({
    where: {
      id: id
    }
  });
};

export const insertarInscripcion = async (inscripcion: Inscripcion) => {
  console.log("inscripcionesService::insertarInscripcion");

  await prisma.inscripciones.create({
    data: {
      usuario_id: inscripcion.usuario_id,
      curso_id: inscripcion.curso_id,
      progreso: inscripcion.progreso,
      completado: inscripcion.completado,
      estado_auditoria: inscripcion.estado_auditoria ?? "1"
    }
  });

  return RESPONSE_INSERT_OK;
};

export const modificarInscripcion = async (
  id: number,
  inscripcion: Inscripcion
) => {
  console.log("inscripcionesService::modificarInscripcion");

  await prisma.inscripciones.update({
    where: {
      id: id
    },
    data: {
      usuario_id: inscripcion.usuario_id,
      curso_id: inscripcion.curso_id,
      progreso: inscripcion.progreso,
      completado: inscripcion.completado,
      estado_auditoria: inscripcion.estado_auditoria,
      fecha_actualizacion: new Date()
    }
  });

  return RESPONSE_UPDATE_OK;
};

export const eliminarInscripcion = async (id: number) => {
  console.log("inscripcionesService::eliminarInscripcion");

  await prisma.inscripciones.update({
    where: {
      id: id
    },
    data: {
      estado_auditoria: "0",
      fecha_actualizacion: new Date()
    }
  });

  return RESPONSE_DELETE_OK;
};
