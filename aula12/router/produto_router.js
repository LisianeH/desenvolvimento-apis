const express = require('express')
const router = express.Router()

const controller = require('../controller/produto_controller.js');

// CREATE
router.post('/', controller.inserir);

// READ
router.get('/', controller.listar);

// READ (por id)
router.get('/:id', controller.buscarPorId);

// UPDATE
router.put('/:id', controller.atualizar);

// DELETE
router.delete('/:id', controller.deletar);

module.exports = router;