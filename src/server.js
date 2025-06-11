const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('./docs/swaggerSpec');
const salesRoutes = require('./routes/salesRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend está rodando!');
});

app.use('/api/vendas', salesRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
