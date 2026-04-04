
let listProducts = [];
let currentId = 1;

function insert( name, category, price ) {
    let id = generateId();
    listProducts.push( { id, name, category, price } );
    return "Produto cadastrado com sucesso!";
}

function listProduct( umaLista ) {
    if ( umaLista.length === 0 ) {
        return "Lista vazia";
    } else {
        for ( let i = 0; i < umaLista.length; i++ ) {
            console.log(
                umaLista[i].id +
                " | " + umaLista[i].name +
                " | " + umaLista[i].category +
                " | R$ " + umaLista[i].price
            );
        }
    }
}

function listAllProducts() {
    if ( listProducts.length == 0 ) {
        return "Lista vazia";
    } else {
        for ( let i = 0; i < listProducts.length; i++ ) {
            console.log(
                listProducts[i].id +
                " | " + listProducts[i].name +
                " | " + listProducts[i].category +
                " | R$ " + listProducts[i].price
            );
        }
    }
}

function findById( id ) {
    let produtoEncontrado = listProducts.find( p => p.id == id );
    if ( !produtoEncontrado ) {
        console.log ( "Produto não encontrado" );
        return;
    }
    return listProduct( [produtoEncontrado] );
}

function findForName( name ) {
    let produtosEncontrados = listProducts.filter(p =>
        p.name.toLowerCase().includes( name.toLowerCase() )
    );
    if ( produtosEncontrados.length === 0 ) {
        return "Produto não encontrado";
    } else {
        return listProduct( produtosEncontrados );
    }
}

function findForCategory( category ) {
    let produtosEncontrados = listProducts.filter( p =>
        p.category.toLowerCase() === category.toLowerCase() );
    if ( produtosEncontrados.length === 0 ) {
        return "Nenhum produto encontrado";
    } else {
        return listProduct( produtosEncontrados );
    }
}

function update( id, name, category, price ) {
    const index = listProducts.findIndex( p => p.id == id );
    if ( index === -1 ) {
        return "Produto não encontrado";
    }
    listProducts[ index ] = {
        id: listProducts[ index ].id,
        name,
        category,
        price
    };
    return "Produto atualizado com sucesso!";
}

function deleteProduct( id ) {
    const index = listProducts.findIndex( p => p.id == id );
    if ( index === -1 ) {
        return "Produto não encontrado";
    }
    listProducts.splice( index, 1 );
    return "Produto deletado com sucesso!";
}

function generateId() {
    return currentId++;
}

module.exports = {
    insert,
    listProduct,
    listAllProducts,
    findById,
    findForName,
    findForCategory,
    update,
    deleteProduct,
    generateId
}