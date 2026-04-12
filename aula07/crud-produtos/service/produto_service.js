const repository = require('../repository/produto_repository.js');

function validarNumero(valor) {
    return typeof valor === "number" && !isNaN(valor);
}

// INSERT
async function insert(name, price) {
    if (!name || price === undefined) {
        throw new Error("Nome e preço são obrigatórios");
    }

    if (!validarNumero(price)) {
        throw new Error("Preço deve ser um número");
    }

    return await repository.insert(name, "default", price);
}

// FIND BY ID
async function findById(id) {
    if (!id || isNaN(id)) {
        throw new Error("ID inválido");
    }

    const data = await repository.readFile();
    const product = data.products.find(p => p.id == id);

    if (!product) {
        throw new Error("não há produtos");
    }

    return product;
}

// UPDATE
async function update(id, name, price) {
    if (!id || isNaN(id)) {
        throw new Error("ID inválido");
    }

    if (!name && price === undefined) {
        throw new Error("Informe pelo menos nome ou preço");
    }

    const data = await repository.readFile();
    const product = data.products.find(p => p.id == id);

    if (!product) {
        throw new Error("não há produtos");
    }

    return await repository.update(
        id,
        name || product.name,
        product.category,
        price !== undefined ? price : product.price
    );
}

// DELETE
async function deleteProduct(id) {
    if (!id || isNaN(id)) {
        throw new Error("ID inválido");
    }

    const data = await repository.readFile();
    const product = data.products.find(p => p.id == id);

    if (!product) {
        throw new Error("não há produtos");
    }

    return await repository.deleteProduct(id);
}

module.exports = {
    insert,
    findById,
    update,
    deleteProduct
};