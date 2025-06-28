export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    rol?: string;
    fecha_registro: Date;
    activo?: boolean;
    estado_auditoria?: string;
    fecha_creacion: Date;
    fecha_actualizacion?: Date;
}