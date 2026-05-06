const fs = require( "fs" ).promises;
const path = require("path").join(__dirname, "../requests.json");

async function readFile() {
    const data = await fs.readFile( path, "utf-8" );
    return JSON.parse( data );
}

async function writeFile( data ) {
    await fs.writeFile( path, JSON.stringify( data, null, 2 ) );
}

// US01 – Inclusão de um novo pedido
async function insert(clientDocument, clientName, productName, productPrice) {
    //[R09] O pedido deve ter preenchido automaticamente o código, a dataHora (atual) e a situação como “aberto”.
    const data = await readFile();
    const situation = "ABERTO";
    const dateRequest = new Date();
    const newRequest = {
            id: data.autoIncrement || 1,
            clientDocument,
            clientName,
            productName,
            productPrice,
            situation: situation,
            dateRequest: dateRequest
        };
        data.requests.push( newRequest );
        data.autoIncrement = (data.autoIncrement || 1) + 1;
        await writeFile( data );
        return "Pedido cadastrado com sucesso!";
}

// US02 – Listagem de pedidos
async function listAllRequests() {
    const data = await readFile();
    return data.requests || [];
}

// US03 – Consulta de um pedido
async function findById( id ) {
    const data = await readFile();
    return (data.requests || []).find( r => r.id == id );
}

// US04 –Atualizar a situação de um pedido
async function updateRequestStatus(id, situation) {
        const data = await readFile();
        const index = data.requests.findIndex( p => p.id == id );
        if ( index === -1 ) {
            return "Pedido não encontrado";
        }
        data.requests[ index ].situation = situation.toUpperCase();
        await writeFile( data );
        return "Pedido com situação atualizada com sucesso!";
}

// US05 –Deletar um pedido
async function deleteRequest( id ) {
    const data = await readFile();
    const index = data.requests.findIndex( p => p.id == id );
    if ( index === -1 ) {
        return "Pedido não encontrado";
    }
    data.requests.splice( index, 1 );
    await writeFile( data );
    return "Pedido deletado com sucesso!";
}

module.exports = {
    readFile,
    writeFile,
    insert,
    listAllRequests,
    findById,
    updateRequestStatus,
    deleteRequest
}