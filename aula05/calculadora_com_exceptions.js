function somarNumerosNaturais( a, b ) {
    if ( !Number.isInteger( a ) || !Number.isInteger( b ) ) {
        throw new Error( "Os valores devem ser números inteiros" );
    }

    if ( a < 0 || b < 0 ) {
        throw new Error( "Os valores devem ser números naturais (não negativos)");
    }

    if ( typeof a !== "number" || typeof b !== "number" ) {
        throw new Error( "Os valores devem ser do tipo número" );
    }

    return a + b;
}

// Testando a função

function main() {
    try {
        // resultado esperado: 8
        let resultado = somarNumerosNaturais( 5, 3 );
        console.log( "Resultado:", resultado );

        // resultado esperado: Erro
        let erro = somarNumerosNaturais( 5, -2 );
        console.log( "Resultado:", erro );

        // resultado esperado: Erro 
        let palavras = somarNumerosNaturais( "abc", 1 );
        console.log( "Resultado:", palavras );

    } catch ( e ) {
        console.log( "Erro:", e.message );
    }
}

main();