# Plataforma de Cursos Online

Este proyecto es una plataforma web para gestionar cursos online, desarrollada con HTML, CSS, JavaScript y un backend en Node.js utilizando Prisma y PostgreSQL.

## Módulos implementados

- Gestión de usuarios (registro, login, CRUD completo)
- Solo los administradores pueden registrarse directamente
- Gestión de instructores (crear, listar, editar, eliminar)
- Visualización de instructores con fotos (foto_url), especialidad y rating
- Gestión de cursos (crear, listar, editar, eliminar)
- Cada curso tiene duración, nivel, categoría, instructor y estado de auditoría
- Gestión de módulos de cada curso (crear, listar, editar, eliminar)
- Registro de inscripciones a los cursos
- Relación entre cursos, categorías, módulos e instructores
- Validaciones completas con Joi para todos los campos y entidades
- Todos los campos obligatorios con validaciones específicas
- Autenticación con token JWT (Bearer Token)
- Middleware de autorización para proteger rutas
- Documentación Swagger para todas las rutas (`/api-docs`)
- Validaciones de frontend en los formularios HTML (JS)
- Diseño coherente con estilos oscuros y navegación entre páginas

## Tecnologías utilizadas

**Frontend**: HTML, CSS, JavaScript Vanilla  
**Backend**: Node.js, Express, Prisma ORM  
**Base de datos**: PostgreSQL  
**Librerías**: Joi, Bcrypt, JWT, Swagger  
**Herramientas**: Postman, DBeaver, Railway, TypeScript

