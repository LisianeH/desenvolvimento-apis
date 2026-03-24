const prompt = require('prompt-sync')();

const nota = prompt( "Digite a nota: " );
let conceito = "";

if ( nota >= 9 ) {
    conceito = "A";
} else if ( nota >= 7 ) { 
    conceito = "B";
} else if ( nota >= 5 ) {
    conceito = "C";
} else {
    conceito = "D";
}

prompt( "Conceito: " + conceito );