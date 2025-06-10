const { searchReturnedProducts } = require('../services/salesService');

async function getReturnedProducts(req, res) {
  try {
    const data = await searchReturnedProducts();
    console.log('DADOS CSV', data)
    res.json(data);
  } catch (err) {
    console.error('Erro ao processar o CSV:', err);
    res.status(500).json({ erro: 'Erro ao processar o CSV', detalhes: err.message });
  }
}

module.exports = { getReturnedProducts };
