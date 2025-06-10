function normalizeCSV(csv){
    
  const normalized = csv.map(sale => ({
    cd_produto: sale.cd_produto,
    tp_valor: sale.tp_valor,
    cd_empresa: sale.cd_empresa,
    round: sale.round,
    nr_dctoorigem: sale.nr_dctoorigem,
    nr_sequencia: sale.nr_sequencia,
    cd_valor: sale.cd_valor,
    cd_historico: sale.cd_historico,
    in_estorno: sale.in_estorno === "F" ? false : true,
    dt_movimento: sale.dt_movimento,
    dt_cadastro: sale.dt_cadastro,
  }));

  return normalized;
}

module.exports = { normalizeCSV };