export interface Instructor {
    id: number;
    nombre?: string;
    biografia?: string;
    foto_url?: string;
    especialidad?: string;
    rating?: number;
    estado_auditoria?: string;
    fecha_creacion: Date;
    fecha_actualizacion?: Date;
}