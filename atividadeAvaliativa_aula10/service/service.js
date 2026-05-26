const repository = require('../repository/repository.js');
const utils = require('../utils/utils.js');

// US01 – Inclusão de um novo pedido
async function insert(clientDocument, clientName, productName, productPrice) {
    await utils.validateClientDocument(clientDocument);
    await utils.validateName(clientName);
    await utils.validateName(productName);
    await utils.validateProductPrice(productPrice);
    
    return await repository.insert(clientDocument, clientName, productName, productPrice);
}

// US02 – Listagem de pedidos
async function listAllRequests() {
    const requests = await repository.listAllRequests();
        
    return requests.map(r => ({
        id: r.id,
        dateRequest: r.dateRequest,
        clientName: r.clientName,
        situation: r.situation,
        productName: r.productName,
        productPrice: r.productPrice
    }));
}

async function listAllRequestsBySituation(situation) {
    await utils.validadeSituation(situation);
    const requests = await repository.listAllRequests();
    return requests
        .filter(r => r.situation === situation)
        .map(r => ({
            id: r.id,
            dateRequest: r.dateRequest,
            clientName: r.clientName,
            situation: r.situation,
            productName: r.productName,
            productPrice: r.productPrice
        }));
}

// US03 – Consulta de um pedido
async function findById(id) {
    await utils.validadeIdRequest(id);

    const data = await repository.readFile();
    const request = data.requests.find(p => p.id == id);

    if (!request) {
        throw new Error("Não há pedidos com esse ID");
    }

    //[R03] A consulta deve exibir as seguintes informações:
    return {
        id: request.id,
        dateRequest: request.dateRequest,
        clientDocument: request.clientDocument,
        clientName: request.clientName,
        productName: request.productName,
        situation: request.situation,
        productPrice: request.productPrice
    };
}

// US04 –Atualizar a situação de um pedido
async function updateRequestStatus(id, situation) {
    await utils.validadeIdRequest(id);
    await utils.validadeSituation(situation);

    const data = await repository.readFile();
    const requestIndex = data.requests.findIndex(p => p.id == id);

    if (requestIndex < 0) {
        throw new Error("Não há pedidos");
    }

    return await repository.updateRequestStatus(
        id,
        situation
    );
}

// US05 –Deletar um pedido
async function deleteRequest(id) {
    await utils.validadeIdRequest(id);

    return await repository.deleteRequest(id);
}

module.exports = {
    insert,
    listAllRequests,
    listAllRequestsBySituation,
    findById,
    updateRequestStatus,
    deleteRequest
};
