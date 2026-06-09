const service = require('../service/produto_service.js');
const repository = require('../repository/produto_repository.js');

// READ
async function listar(req, res) {
    try {
        const products = await repository.listAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ FOR ID
async function buscarPorId(req, res) {
    try {
        const product = await service.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// CREATE
async function inserir(req, res) {
    try {
        const { name, category, price } = req.body;
        const result = await service.insert(name, category, price);
        res.status(201).json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE
async function atualizar(req, res) {
    try {
        const id = req.params.id;
        const { name, price } = req.body;

        const result = await service.update(id, name, price);

        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE
async function deletar(req, res) {
    try {
        const id = req.params.id;

        const result = await service.deleteProduct(id);

        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
};