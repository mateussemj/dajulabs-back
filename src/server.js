const express = require('express');
const salesRoutes = require('./routes/salesRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend está rodando!');
});

app.use('/api/vendas', salesRoutes)


app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});
