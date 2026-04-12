const express = require('express')
const app = express()
const PORT = 3001;

const service = require('./service/produto_service.js');
const repository = require('./repository/produto_repository.js');

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Inicio CRUD produtos')
});

// CREATE
app.post('/produtos', async (req, res) => {
    try {
        const { name, category, price } = req.body;

        const result = await service.insert(name, category, price);

        res.status(201).json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ
app.get('/produtos', async (req, res) => {
    const data = await repository.readFile();
    res.json(data.products);
});

// READ (buscar por id)
app.get('/produtos/:id', async (req, res) => {
    try {
        const product = await service.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// UPDATE
app.put('/produtos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { name, category, price } = req.body;

        const result = await repository.update(id, name, category, price);

        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// ** PUT → substitui tudo; PATCH → atualiza só alguns campos

// DELETE
app.delete('/produtos/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const result = await repository.deleteProduct(id);

        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Tratamento de erro, com rota não encontrada
app.use((req, res) => {
    res.status(404).send('Rota não encontrada')
});
