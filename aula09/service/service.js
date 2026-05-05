const repository = require('../repository/repository.js');
const utils = require('../utils/utils.js');

// US1 - Inclusão de novo cliente
async function insert(cpfCnpj, typePerson, name, email, dateOfBirth) {
    await utils.validateCpfCnpj(cpfCnpj);
    await utils.validateTypePerson(typePerson);
    await utils.validateName(name);
    await utils.validateEmail(email);
    await utils.validateDateOfBirth(dateOfBirth);
    
    const clients = await repository.listAllClients();
    
    const existingClient = clients.find(c => c.cpfCnpj === cpfCnpj);
    if (existingClient) {
        throw new Error("O CPF/CNPJ deve ser único na base");
    }
    
    return await repository.insert(cpfCnpj, typePerson, name, email, dateOfBirth);
}

// US2 - Listar clientes
async function listAllClients() {
    const clients = await repository.listAllClients();
    
    clients.sort((a, b) => a.name.localeCompare(b.name));
    
    return clients.map(c => ({
        cpfCnpj: c.cpfCnpj,
        typePerson: c.typePerson,
        name: c.name,
        email: c.email
    }));
}

// US3 - Buscar um cliente pelo seu CPF/CNPJ
async function findByDocument(cpfCnpj) {
    await utils.validateCpfCnpj(cpfCnpj);

    const client = await repository.findByDocument(cpfCnpj);

    if (!client) {
        throw new Error("Cliente não encontrado");
    }

    let formattedDate = null;
    if (client.dateOfBirth) {
        if (client.dateOfBirth.includes('/')) {
            formattedDate = client.dateOfBirth;
        } else {
            const d = new Date(client.dateOfBirth + (client.dateOfBirth.includes('T') ? "" : "T00:00:00Z"));
            if (!isNaN(d.getTime())) {
                const day = String(d.getUTCDate()).padStart(2, '0');
                const month = String(d.getUTCMonth() + 1).padStart(2, '0');
                const year = d.getUTCFullYear();
                formattedDate = `${day}/${month}/${year}`;
            } else {
                formattedDate = client.dateOfBirth;
            }
        }
    }

    return {
       cpfCnpj: client.cpfCnpj,
       typePerson: client.typePerson,
       name: client.name,
       email: client.email,
       dateOfBirth: formattedDate
    };
}


module.exports = {
    insert,
    listAllClients,
    findByDocument
};