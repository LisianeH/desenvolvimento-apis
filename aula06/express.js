const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/produtos", (req, res) => {
    res.send("Listando Produtos");
});

app.use((req, res) => {
    res.status(404).send( "Rota não encontrada" );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});