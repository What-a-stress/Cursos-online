import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {

    openapi: '3.0.0',
    info: {
        title: 'API Cursos Online',
        version: '1.0.0',
        description: 'Documentación de la APi del Grupo 8',
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [{ bearerAuth: [] }],
};


const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);