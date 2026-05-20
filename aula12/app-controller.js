const express = require('express')
const app = express()
const PORT = 3002;

const controller = require('./controller/produto_controller.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Inicio CRUD produtos')
});

// CREATE
app.post('/produtos', controller.inserir);

// READ
app.get('/produtos', controller.listar);

// READ (por id)
app.get('/produtos/:id', controller.buscarPorId);

// UPDATE
app.put('/produtos/:id', controller.atualizar);

// DELETE
app.delete('/produtos/:id', controller.deletar);

// Tratamento de erro, com rota não encontrada
app.use((req, res) => {
    res.status(404).send('Rota não encontrada')
});

// Inicial no terminal
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
