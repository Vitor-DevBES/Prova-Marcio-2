const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/produtos', produtoController.getAllProdutos);
router.get('/produto', produtoController.getProduto);
router.post('/produto', produtoController.createProduto);
router.put('/produto/:id', produtoController.updateProduto);
router.delete('/produto/:id', produtoController.deleteProduto);

module.exports = router;
