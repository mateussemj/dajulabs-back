function normalizeCSV(csv) {
  return csv.map(sale => ({
    product: sale.cd_produto,
    company: sale.cd_empresa,
    isReversal: sale.in_estorno === "F" ? false : true,
    value: Number(sale.cd_valor),
    invoice: sale.nr_dctoorigem
  }));
}

module.exports = { normalizeCSV };
