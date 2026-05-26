const express = require('express')
const app = express()
const PORT = 3004;

const service = require('./service/service.js');
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Inicio CRUD de Pedidos')
});

// US01 – Inclusão de um novo pedido
app.post('/cadastro', async (req, res) => {
    try {
        const { clientDocument, clientName, productName, productPrice } = req.body;

        const result = await service.insert(clientDocument, clientName, productName, productPrice);

        res.status(201).json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// US02 – Listagem de pedidos
app.get('/pedidos', async (req, res) => {
    try {
        // busca por situação quando na URL '?situation={situacao}' após /pedidos
        const { situation } = req.query;
        if (situation) {
            const requests = await service.listAllRequestsBySituation(situation.toUpperCase());
            return res.status(200).json(requests);
        }

        const requests = await service.listAllRequests();
        res.json(requests);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// US03 – Consulta de um pedido
app.get('/pedidos/:id', async (req, res) => {
    try {
        const request = await service.findById(req.params.id);
        res.json(request);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// US04 –Atualizar a situação de um pedido
app.put('/pedidos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { situation } = req.body;

        const result = await service.updateRequestStatus(id, situation);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// US05 –Deletar um pedido
app.delete('/pedidos/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const result = await service.deleteRequest(id);

        res.json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
