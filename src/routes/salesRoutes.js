const express = require('express');
const router = express.Router();
const { getReturnedProducts } = require('../controllers/salesController');

router.get('/devolvidos', getReturnedProducts);

module.exports = router;
