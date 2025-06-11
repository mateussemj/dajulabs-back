const express = require('express');
const router = express.Router();
const { getReturnedProducts } = require('../controllers/salesController');

/**
 * @swagger
 * /api/vendas/devolvidos:
 *   get:
 *     summary: Lista os pares de venda e estorno
 *     tags: [Vendas]
 *     responses:
 *       200:
 *         description: Lista de transações com estorno
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TransactionPair'
 *             examples:
 *               exemplo1:
 *                 summary: Par de venda e estorno
 *                 value:
 *                   - invoice: "111111"
 *                     transacation:
 *                       sale:
 *                         product: "252525"
 *                         company: "2"
 *                         is_reversal: false
 *                         value: 5
 *                       refund:
 *                         product: "252525"
 *                         company: "2"
 *                         is_reversal: true
 *                         value: 5
 */
router.get('/devolvidos', getReturnedProducts);

module.exports = router;
