const prompt = require('prompt-sync')();

const valor = prompt( "Digite um valor de três dígitos: " );

let soma = 0;

for ( let i = 0; i < valor.length; i++ ) {
    soma += parseInt( valor.split( "" )[ i ] );
}

prompt( "Unidade: " + valor[2] +
    "\nDezena: " + valor[1] +
    "\nCentena: " + valor[0] +
    "\nA soma dos dígitos é: " + soma );