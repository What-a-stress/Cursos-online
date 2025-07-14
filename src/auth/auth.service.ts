import { PrismaClient } from '@prisma/client';
import { comparePassword } from '../utils/bcrypt';
import { signToken } from './jwt';
import { RESPONSE_CREDENTIALS_ERROR } from '../shared/constants';

const prisma = new PrismaClient();

export const loginAuth = async (email: string, password: string) => {
  console.log('auth.service::loginAuth');

  const usuario = await prisma.usuarios.findUnique({
    where: { email }
  });

  if (!usuario) {
    throw new Error(RESPONSE_CREDENTIALS_ERROR);
  }

  const passwordValida = await comparePassword(password, usuario.password);
  if (!passwordValida) {
    throw new Error(RESPONSE_CREDENTIALS_ERROR);
  }

  const token = signToken({
    id: usuario.id,
    role: usuario.rol,
    username: usuario.nombre
  });

  return {
    token,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    }
  };
};
