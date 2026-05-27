
async function validateClientDocument(clientDocument) {
    //[R01] O CPF do cliente é obrigatório.
    if (!clientDocument) { 
        throw new Error("O documento do cliente é obrigatório");
    }
    //[R02] O CPF deve ser numérico e possuir 9 algarismos. 
    const cleanValue = clientDocument.toString().replace(/[\D]/g, '');
    if (cleanValue.length < 9) {
        throw new Error("O documento do cliente deve ter no mínimo 9 caracteres");
    }
}

async function validateName(name) {
    //[R03] O nome do cliente é obrigatório. //[R05] O nome do produto é obrigatório.
    if (!name) { 
        throw new Error("O nome é obrigatório");
    }
    //[R04] O nome do cliente deve ter pelo menos 5 caracteres. //[R06] O nome do produto deve ter pelo menos 5 caracteres.
    if (name.length < 5) {
        throw new Error("O nome deve ter no mínimo 5 caracteres");
    }
}

async function validateProductPrice(productPrice) {
    //[R07] O preço do produto é obrigatório.
    if (productPrice === undefined || productPrice === null) { 
        throw new Error("O preço do produto é obrigatório");
    }
    //[R08] O preço do produto deve ser um número positivo.
    if (productPrice <= 0) {
        throw new Error("O preço do produto deve ser um valor positivo");
    }
}

async function validadeIdRequest(id) {
    //[R01] O código do pedido é obrigatório
    if (!id) {
        throw new Error("ID inválido ou vazio");
    }
    //[R02] O código do pedido deve ser um número
    if (isNaN(id)){
        throw new Error("ID deve ser numérico");
    }
}

async function validadeSituation(situation) {
    //[R03] A situação do pedido é obrigatória
    if ( !situation ) {
        throw new Error("Situação não preenchida");
    }
    //[R04] A situação só permite os valores “aberto”,  “pago” e “finalizado”
    if ( situation.toUpperCase() !== 'ABERTO' && 
        situation.toUpperCase() !== 'PAGO' && 
        situation.toUpperCase() !== 'FINALIZADO' ) {
            throw new Error("Situação não atende as situações cadastradas (ABERTO, PAGO, FINALIZADO)");
    }
}

module.exports = {
    validateClientDocument,
    validateName,
    validateProductPrice,
    validadeIdRequest,
    validadeSituation
}