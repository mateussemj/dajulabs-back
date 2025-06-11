class Transaction {
  constructor({ product, company, isReversal, value, invoice }) {
    this.product = product;
    this.company = company;
    this.isReversal = isReversal;
    this.value = Number(value);
    this.invoice = invoice;
  }
}

module.exports = { Transaction };
