import { PrismaClient } from "@prisma/client";
import { Usuario } from "../models/usuario"; // Asegúrate de que esta ruta sea correcta para tu interfaz Usuario
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

export const listarUsuarios = async () => {
    console.log('usuariosService::listarUsuarios');
    return await prisma.usuarios.findMany({
        where: {
            estado_auditoria: '1' // O 'activo: true' si prefieres usar ese campo para el estado lógico
        },
        orderBy: {
            id: 'asc' // Ordenar por el ID del usuario
        }
    });
}

export const obtenerUsuario = async (id: number) => {
    console.log('usuariosService::obtenerUsuario');
    return await prisma.usuarios.findUnique({
        where: {
            id: id // Buscar por el ID del usuario
        }
    });
}

export const insertarUsuario = async (usuario: Usuario) => {
    console.log('usuariosService::insertarUsuario');
    await prisma.usuarios.create({
        data: {
            nombre: usuario.nombre,
            email: usuario.email,
            password: usuario.password,
            rol: usuario.rol, // Campo opcional
            // fecha_registro se establece automáticamente por defecto en la BD
            activo: usuario.activo, // Campo opcional
            estado_auditoria: usuario.estado_auditoria // Campo opcional
            // fecha_creacion se establece automáticamente por defecto en la BD
        }
    });
    return RESPONSE_INSERT_OK;
}

export const modificarUsuario = async (id: number, usuario: Usuario) => {
    console.log('usuariosService::modificarUsuario');
    await prisma.usuarios.update({
        where: {
            id: id // Modificar por el ID del usuario
        },
        data: {
            nombre: usuario.nombre,
            email: usuario.email,
            password: usuario.password,
            rol: usuario.rol,
            activo: usuario.activo,
            estado_auditoria: usuario.estado_auditoria
            // fecha_actualizacion se actualiza automáticamente en la BD
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarUsuario = async (id: number) => {
    console.log('usuariosService::eliminarUsuario');
    await prisma.usuarios.update({
        where: {
            id: id // Eliminar (lógicamente) por el ID del usuario
        },
        data: {
            estado_auditoria: '0' // Cambiar a '0' para eliminación lógica, o 'activo: false'
        }
    });
    return RESPONSE_DELETE_OK;
}