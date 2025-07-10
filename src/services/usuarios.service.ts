import { PrismaClient } from "@prisma/client";
import { Usuario } from "../models/usuario"; 
import { fromPrismaUsuario } from "../mappers/usuario.mapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";


const prisma = new PrismaClient();


export const listarUsuarios = async () => {
  console.log("usuariosService::listarUsuarios");

  const usuarios = await prisma.usuarios.findMany({
    where: {
      estado_auditoria: "1",
    },
    orderBy: {
      id: "asc",
    },
  });

  return usuarios.map(fromPrismaUsuario);
}




export const obtenerUsuario = async (id: number) => {
    console.log('usuariosService::obtenerUsuario');
    return await prisma.usuarios.findUnique({
        where: {
            id: id 
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
            activo: usuario.activo, // Campo opcional
            estado_auditoria: usuario.estado_auditoria // Campo opcional
        
        }
    });
    return RESPONSE_INSERT_OK;
}



export const modificarUsuario = async (id: number, usuario: Usuario) => {
    console.log('usuariosService::modificarUsuario');
    await prisma.usuarios.update({
        where: {
            id: id 
        },
        data: {
            ...usuario,
            fecha_actualizacion: new Date()
        }
    });
    return RESPONSE_UPDATE_OK;
}




export const eliminarUsuario = async (id: number) => {
    console.log('usuariosService::eliminarUsuario');
    await prisma.usuarios.update({
        where: {
            id: id 
        },
        data: {
            estado_auditoria: '0', 
            fecha_actualizacion: new Date()
        }
    });
    return RESPONSE_DELETE_OK;
}