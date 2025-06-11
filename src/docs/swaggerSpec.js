const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
    },
    components: {
      schemas: {
        Transaction: {
          type: 'object',
          properties: {
            product: { type: 'string', example: '252013' },
            company: { type: 'string', example: '2' },
            is_reversal: { type: 'boolean', example: false },
            value: { type: 'number', example: 8 },
          },
        },
        TransactionPair: {
          type: 'object',
          properties: {
            invoice: { type: 'string', example: '346991' },
            transacation: {
              type: 'object',
              properties: {
                sale: { $ref: '#/components/schemas/Transaction' },
                refund: { $ref: '#/components/schemas/Transaction' },
              },
            },
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, '../routes/*.js')],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
