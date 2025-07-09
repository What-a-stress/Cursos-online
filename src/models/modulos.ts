export interface Modulo {
    id: number;
    curso_id: number | null; 
    titulo: string;
    descripcion: string | null;
    orden: number;
    estado_auditoria: string | null;
    fecha_creacion: Date | null;
    fecha_actualizacion: Date | null;
}
