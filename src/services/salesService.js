const path = require('path');
const { readCSV } = require('../utils/csvReader');
const { normalizeCSV } = require('../utils/normalizeData');

async function searchReturnedProducts() {
    console.log("Iniciando busca por produtos devolvidos...");
  const sales = await readCSV(path.join(__dirname, '../data/sales_and_reversals.csv'));

  const normalized = normalizeCSV(sales)

  console.log("Normalized Sales:", normalized.length);

  const returnedProducts = normalized.filter(sale => sale.in_estorno);
  const returnedCdProducts = new Set(returnedProducts.map(p => p.cd_produto))

  const matchingOriginalSales = normalized.filter(sale => !sale.in_estorno && returnedCdProducts.has(sale.cd_produto));

  console.log("Produtos devolvidos:", returnedProducts.length);
  console.log("Vendas originais correspondentes:", matchingOriginalSales.length);


  return {returnedProducts, matchingOriginalSales};
}

module.exports = { searchReturnedProducts };
