const fs = require( "fs" ).promises;
const path = require("path").join(__dirname, "produtos.json");

async function readFile() {
    const data = await fs.readFile( path, "utf-8" );
    return JSON.parse( data );
}

async function writeFile( data ) {
    await fs.writeFile( path, JSON.stringify( data, null, 2 ) );
}

async function insert( name, category, price ) {
    const data = await readFile();
    const newProduct = {
        id: data.autoIncrement,
        name,
        category,
        price
    };
    data.products.push( newProduct );
    data.autoIncrement++;
    await writeFile( data );
    return "Produto cadastrado com sucesso!";
}

async function listAllProducts() {
    const data = await readFile();
    if ( data.products.length === 0 ) {
        console.log( "Lista vazia" );
        return;
    }
    data.products.forEach( p => {
        console.log( `${p.id} | ${p.name} | ${p.category} | R$ ${p.price}` );
    } );
}

async function findById( id ) {
    const data = await readFile();
    const product = data.products.find( p => p.id == id );
    if ( !product ) {
        console.log( "Produto não encontrado" );
        return;
    }
    console.log( `${product.id} | ${product.name} | ${product.category} | R$ ${product.price}` );
}

async function deleteProduct( id ) {
    const data = await readFile();
    const index = data.products.findIndex( p => p.id == id );
    if ( index === -1 ) {
        return "Produto não encontrado";
    }
    data.products.splice( index, 1 );
    await writeFile( data );
    return "Produto deletado com sucesso!";
}

async function update( id, name, category, price ) {
    const data = await readFile();
    const index = data.products.findIndex( p => p.id == id );
    if ( index === -1 ) {
        return "Produto não encontrado";
    }
    data.products[ index ] = {
        id: data.products[ index ].id,
        name,
        category,
        price
    };
    await writeFile( data );
    return "Produto atualizado com sucesso!";
}

async function findForName( name ) {
    const data = await readFile();
    const results = data.products.filter( p =>
        p.name.toLowerCase().includes( name.toLowerCase() )
    );
    if ( results.length === 0 ) {
        console.log( "Produto não encontrado" );
        return;
    }
    results.forEach( p => {
        console.log( `${p.id} | ${p.name} | ${p.category} | R$ ${p.price}` );
    } );
}

async function findForCategory( category ) {
    const data = await readFile();
    const results = data.products.filter( p =>
        p.category.toLowerCase() === category.toLowerCase()
    );
    if ( results.length === 0 ) {
        console.log( "Nenhum produto encontrado" );
        return;
    }
    results.forEach( p => {
        console.log( `${p.id} | ${p.name} | ${p.category} | R$ ${p.price}` );
    } );
}

module.exports = {
    readFile,
    writeFile,
    insert,
    listAllProducts,
    findById,
    deleteProduct,
    update,
    findForName,
    findForCategory
}