const prompt = require('prompt-sync')();

const senha = "DesenvolvimentoApis";

let senhaUsuario = prompt( "Digite a senha: " );

if ( senha == senhaUsuario.trim() ) {
    prompt( "Acesso permitido!" );
} else {
    prompt( "Senha incorreta." );
}