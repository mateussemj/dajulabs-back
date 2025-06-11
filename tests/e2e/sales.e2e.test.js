const request = require('supertest');
const app = require('../../src/server');

describe('GET /vendas/devolvidos', () => {
  it('deve retornar a lista de transações com reembolsos', async () => {
    const response = await request(app).get('/api/vendas/devolvidos');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    if (response.body.length > 0) {
      const transaction = response.body[0];

      expect(transaction).toHaveProperty('invoice');
      expect(transaction).toHaveProperty('transaction');
      expect(transaction.transaction).toHaveProperty('sale');
      expect(transaction.transaction).toHaveProperty('refund');
      expect(transaction.transaction.sale).toHaveProperty('product');
      expect(transaction.transaction.refund).toHaveProperty('is_reversal', true);
    }
  });

  it('Cada estorno só deve ser pareado uma única vez', async () => {
    const response = await request(app).get('/api/vendas/devolvidos');

    const usedRefunds = new Set();

    for (const transaction of response.body) {
        const refundKey = `${transaction.transaction.refund.product}-${transaction.transaction.refund.company}-${transaction.invoice}`;
        expect(usedRefunds.has(refundKey)).toBe(false);
        usedRefunds.add(refundKey);
    }
  })

  it('Todas as transações devem conter campos obrigatórios', async () => {
    const response = await request(app).get('/api/vendas/devolvidos');

    for (const transaction of response.body) {
        const sale = transaction.transaction.sale;
        const refund = transaction.transaction.refund;

        expect(typeof sale.product).toBe('string');
        expect(typeof sale.company).toBe('string');
        expect(typeof sale.value).toBe('number');
        expect(typeof refund.product).toBe('string');
        expect(typeof refund.value).toBe('number');
    }
  })
});
