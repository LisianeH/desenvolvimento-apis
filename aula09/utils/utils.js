
async function validateCpfCnpj(cpfCnpj) {
    if (!cpfCnpj) throw new Error("O CPF/CNPJ é obrigatório");
    const cleanValue = cpfCnpj.toString().replace(/[\D]/g, '');
    if (cleanValue.length < 9) {
        throw new Error("O CPF/CNPJ deve ter no mínimo 9 caracteres");
    }
}

async function validateTypePerson(typePerson) {
    if (!typePerson) throw new Error("O tipo de pessoa é obrigatório");
    if (typePerson !== 'F' && typePerson !== 'J') {
        throw new Error("O tipo pessoa deve aceitar apenas 'F' para físico e 'J' para jurídico");
    }
}

async function validateName(name) {
    if (!name) throw new Error("O nome é obrigatório");
    const nameRegex = /^[a-zA-Z0-9À-ÿ\s]+$/;
    if (!nameRegex.test(name)) {
        throw new Error("O nome deve conter apenas letras, números e acentuação");
    }
}

async function validateEmail(email) {
    if (!email) throw new Error("O e-mail é obrigatório");
    
    const atCount = (email.match(/@/g) || []).length;
    if (atCount !== 1) {
        throw new Error("O e-mail deve ter um único '@'");
    }
    
    if (!email.includes('.')) {
        throw new Error("O e-mail deve ter pelo menos um '.'");
    }
}

async function validateDateOfBirth(dateOfBirth) {
    if (!dateOfBirth) return;
    
    const parsedDate = new Date(dateOfBirth);
    if (isNaN(parsedDate.getTime())) {
        throw new Error("A data de nascimento deve ser uma data válida");
    }
    
    if (parsedDate > new Date()) {
        throw new Error("A data de nascimento não pode ser futura");
    }
}

module.exports = {
    validateCpfCnpj,
    validateTypePerson,
    validateName,
    validateEmail,
    validateDateOfBirth
};  