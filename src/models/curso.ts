export interface Curso {
    id: number;
    titulo: string;
    descripcion?: string;
    precio: number;
    categoria_id: number;
    instructor_id: number;
    duracion_horas?: number;
    nivel?: string;
    fecha_creacion: Date;
    activo?: boolean;
    estado_auditoria?: string;
    fecha_actualizacion?: Date;
}