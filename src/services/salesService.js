const path = require('path');
const { readCSV } = require('../utils/csvReader');
const { normalizeCSV } = require('../utils/normalizeData');
const { Transaction} = require('../models/Transaction');
const { TransactionPair } = require('../models/TransactionPair');

async function searchReturnedProducts() {
  console.log("INICIANDO BUSCA")
  const data = await readCSV(path.join(__dirname, '../data/sales_and_reversals.csv'));
  const normalized = normalizeCSV(data);
  const transactions = normalized.map(sale => new Transaction(sale));

  const refundsMap = new Map();

  const salesOnly = transactions.filter(t => !t.isReversal);
  console.log("vendas ", salesOnly.length)
  const refundsOnly = transactions.filter(t => t.isReversal);
  console.log("reembolsos ", refundsOnly.length)

  for (const refund of refundsOnly) {
    const key = `${refund.product}-${refund.invoice}`;
    if (!refundsMap.has(key)) {
      refundsMap.set(key, []);
    }
    refundsMap.get(key).push(refund);
  }

  const result = [];

  for (const sale of salesOnly) {
    const key = `${sale.product}-${sale.invoice}`;
    const refunds = refundsMap.get(key);

    if (refunds && refunds.length > 0) {
      console.log("Encontrado reembolso para venda", sale.invoice, sale.product);
      const refund = refunds.shift();
      console.log("Novo par encontrado", sale, refund)
      result.push(new TransactionPair(sale, refund).toJSON());
    }
  }

  return result;
}

module.exports = { searchReturnedProducts };
