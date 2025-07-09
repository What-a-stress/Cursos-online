import { cursos } from "@prisma/client";
import { Curso } from "../models/curso";

export const fromPrismaCurso = (curso: cursos) => {
  return {
    id: curso.id,
    titulo: curso.titulo,
    descripcion: curso.descripcion,
    precio: curso.precio ? Number(curso.precio) : null,
    categoria_id: curso.categoria_id,
    instructor_id: curso.instructor_id,
    duracion_horas: curso.duracion_horas,
    nivel: curso.nivel,
    activo: curso.activo,
    estado_auditoria: curso.estado_auditoria,
    fecha_creacion: curso.fecha_creacion ? new Date(curso.fecha_creacion) : null,
    fecha_actualizacion: curso.fecha_actualizacion ? new Date(curso.fecha_actualizacion) : null,
  };
};

export const toPrismaCurso = (curso: Curso) => {
  return {
    titulo: curso.titulo,
    descripcion: curso.descripcion,
    precio: curso.precio,
    categoria_id: curso.categoria_id,
    instructor_id: curso.instructor_id,
    duracion_horas: curso.duracion_horas,
    nivel: curso.nivel,
    activo: curso.activo,
    estado_auditoria: curso.estado_auditoria,
  };
};
