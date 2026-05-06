const fs = require( "fs" ).promises;
const path = require("path").join(__dirname, "../clients.json");

async function readFile() {
    const data = await fs.readFile( path, "utf-8" );
    return JSON.parse( data );
}

async function writeFile( data ) {
    await fs.writeFile( path, JSON.stringify( data, null, 2 ) );
}

// US1 - Inclusão de novo cliente
async function insert( cpfCnpj, typePerson, name, email, dateOfBirth ) {
    const data = await readFile();
    if (!data.clients) data.clients = [];
    const newClient = {
        id: data.autoIncrement || 1,
        cpfCnpj,
        typePerson,
        name,
        email,
        dateOfBirth
    };
    data.clients.push( newClient );
    data.autoIncrement = (data.autoIncrement || 1) + 1;
    await writeFile( data );
    return "Cliente cadastrado com sucesso!";
}

// US2 - Listar clientes
async function listAllClients() {
    const data = await readFile();
    return data.clients || [];
}

// US3 - Buscar um cliente pelo seu CPF/CNPJ
async function findByDocument( cpfCnpj ) {
    const data = await readFile();
    return (data.clients || []).find( c => c.cpfCnpj == cpfCnpj );
}


module.exports = {
    readFile,
    writeFile,
    insert,
    listAllClients,
    findByDocument
}