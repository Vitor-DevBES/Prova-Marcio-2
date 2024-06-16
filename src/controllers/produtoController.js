const Produto = require('../models/produtoModel');

// Listar todos os produtos
exports.getAllProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Listar um produto por ID ou Nome
exports.getProduto = async (req, res) => {
    const { id, nome } = req.query;
    try {
        const query = id ? { _id: id } : { nome: nome };
        const produto = await Produto.findOne(query);
        if (produto) {
            res.json(produto);
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Cadastrar um novo produto
exports.createProduto = async (req, res) => {
    const novoProduto = new Produto(req.body);
    try {
        const produto = await novoProduto.save();
        res.status(201).json(produto);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Atualizar um produto existente
exports.updateProduto = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await Produto.findByIdAndUpdate(id, req.body, { new: true });
        if (produto) {
            res.json(produto);
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Deletar um produto
exports.deleteProduto = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await Produto.findByIdAndDelete(id);
        if (produto) {
            res.json({ message: 'Produto deletado com sucesso' });
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
