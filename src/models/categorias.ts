
export interface Categoria {
    id: number;
    nombre: string;
    descripcion: string | null;
    estado_auditoria: string | null;
    fecha_creacion: Date | null;
    fecha_actualizacion: Date | null;
}