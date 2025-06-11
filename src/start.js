const PORT = 3001;

const app = require('./server');
app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3001");
});
