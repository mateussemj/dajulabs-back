const path = require('path');
const { readCSV } = require('../utils/csvReader');
const { normalizeCSV } = require('../utils/normalizeData');
const { Transaction } = require('../models/Transaction');
const { TransactionPair } = require('../models/TransactionPair');

async function searchReturnedProducts() {
  const transactions = await loadTransactions();
  const { salesOnly, refundsMap } = separateTransactions(transactions);
  return pairTransactions(salesOnly, refundsMap);
}

async function loadTransactions() {
  const data = await readCSV(path.join(__dirname, '../data/sales_and_reversals.csv'));
  const normalized = normalizeCSV(data);
  return normalized.map(sale => new Transaction(sale));
}

function separateTransactions(transactions) {
  const salesOnly = [];
  const refundsMap = new Map();

  for (const t of transactions) {
    if (t.isReversal) {
      const key = `${t.product}-${t.invoice}`;
      if (!refundsMap.has(key)) refundsMap.set(key, []);
      refundsMap.get(key).push(t);
    } else {
      salesOnly.push(t);
    }
  }

  return { salesOnly, refundsMap };
}

function pairTransactions(sales, refundsMap) {
  const result = [];

  for (const sale of sales) {
    const key = `${sale.product}-${sale.invoice}`;
    const refunds = refundsMap.get(key);
    if (refunds && refunds.length > 0) {
      const refund = refunds.shift();
      result.push(new TransactionPair(sale, refund).toJSON());
    }
  }

  return result;
}

module.exports = { searchReturnedProducts };
