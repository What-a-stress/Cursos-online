export interface Inscripcion {
  id: number;
  usuario_id: number;
  curso_id: number;
  fecha_inscripcion: Date | null;
  progreso: number | null;
  completado: boolean | null;
  estado_auditoria: string | null;
  fecha_creacion: Date | null;
  fecha_actualizacion: Date | null;
}
