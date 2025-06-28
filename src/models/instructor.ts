export interface Instructor {
    id: number;
    usuario_id: number;
    biografia?: string;
    foto_url?: string;
    especialidad?: string;
    rating?: number;
    estado_auditoria?: string;
    fecha_creacion: Date;
    fecha_actualizacion?: Date;
}