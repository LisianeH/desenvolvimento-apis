const pool = require('../database/database.js');

function objectProduct(p) {
    if (!p) return null;
    return {
        id: p.id,
        name: p.nome,
        category: p.categoria,
        price: p.preco
    };
}

async function insert(name, category, price) {
    const query = 'INSERT INTO produtos (nome, categoria, preco) VALUES ($1, $2, $3)';
    await pool.query(query, [name, category, price]);
    return "Produto cadastrado com sucesso!";
}

async function listAllProducts() {
    const query = 'SELECT * FROM produtos ORDER BY id';
    const resultado = await pool.query(query);
    return resultado.rows.map(objectProduct);
}

async function findById(id) {
    const query = 'SELECT * FROM produtos WHERE id = $1';
    const resultado = await pool.query(query, [id]);
    return objectProduct(resultado.rows[0]);
}

async function deleteProduct(id) {
    const query = 'DELETE FROM produtos WHERE id = $1';
    const resultado = await pool.query(query, [id]);
    
    if (resultado.rowCount === 0) {
        return "Produto não encontrado";
    }
    return "Produto deletado com sucesso!";
}

async function update(id, name, category, price) {
    const query = 'UPDATE produtos SET nome = $1, categoria = $2, preco = $3 WHERE id = $4';
    const resultado = await pool.query(query, [name, category, price, id]);
    
    if (resultado.rowCount === 0) {
        return "Produto não encontrado";
    }
    return "Produto atualizado com sucesso!";
}

async function findForName(name) {
    const query = 'SELECT * FROM produtos WHERE LOWER(nome) LIKE LOWER($1)';
    const resultado = await pool.query(query, [`%${name}%`]);
    return resultado.rows.map(objectProduct);
}

async function findForCategory(category) {
    const query = 'SELECT * FROM produtos WHERE LOWER(categoria) = LOWER($1)';
    const resultado = await pool.query(query, [category]);
    return resultado.rows.map(objectProduct);
}

module.exports = {
    insert,
    listAllProducts,
    findById,
    deleteProduct,
    update,
    findForName,
    findForCategory
};