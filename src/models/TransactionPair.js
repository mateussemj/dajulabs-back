class TransactionPair {
  constructor(sale, refund) {
    this.invoice = sale.invoice;
    this.transaction = {
      sale,
      refund
    };
  }

  toJSON() {
    return {
      invoice: this.invoice,
      transaction: {
        sale: {
          product: this.transaction.sale.product,
          company: this.transaction.sale.company,
          is_reversal: this.transaction.sale.isReversal,
          value: this.transaction.sale.value
        },
        refund: {
          product: this.transaction.refund.product,
          company: this.transaction.refund.company,
          is_reversal: this.transaction.refund.isReversal,
          value: this.transaction.refund.value
        }
      }
    };
  }
}

module.exports = { TransactionPair };
