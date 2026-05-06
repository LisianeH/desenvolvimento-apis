const express = require('express')
const app = express()
const PORT = 3003;

const service = require('./service/service.js');
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Inicio CRUD de Clientes')
});

// US1 - Inclusão de novo cliente
app.post('/cadastro', async (req, res) => {
    try {
        const { cpfCnpj, typePerson, name, email, dateOfBirth } = req.body;

        const result = await service.insert(cpfCnpj, typePerson, name, email, dateOfBirth);

        res.status(201).json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// US2 - Listar clientes
app.get('/clientes', async (req, res) => {
    try {
        const clients = await service.listAllClients();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// US3 - Buscar um cliente pelo seu CPF/CNPJ
app.get('/clientes/:cpfCnpj', async (req, res) => {
    try {
        const client = await service.findByDocument(req.params.cpfCnpj);
        res.json(client);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});
