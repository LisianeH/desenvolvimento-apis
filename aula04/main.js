const prompt = require( "prompt-sync" )();
const repository = require( "./produto_repository.js" );

console.log( "Vamos iniciar a aplicação!" );
while ( 1 ) {
    console.log(
        "\nMenu" +
        "\n1 - Criar novo produto" +
        "\n2 - Listar todos os produtos" +
        "\n3 - Busca produto por ID" +
        "\n4 - Buscar produto por nome" +
        "\n5 - Busca produtos por categoria" +
        "\n6 - Atualizar um produto" +
        "\n7 - Deletar um produto" +
        "\n8 - Sair\n"
    );
    let opcao = prompt( "O que deseja fazer? " );

    switch ( opcao ) {
        case "1":
        create();
        break;
        case "2":
        list();
        break;
        case "3":
        findById();
        break;
        case "4":
        findForName();
        break;
        case "5":
        findForCategory();
        break;
        case "6":
        update();
        break;
        case "7":
        deleteProduct();
        break;
        case "8":
        console.log( "Finalizando... Obrigado!" );
        return;
        default:
        console.log( "Nenhuma opção disponível" );
    }
}

function create() {
    console.log();
    let name = prompt( "Qual nome do produto? " );
    let category = prompt( "Qual categoria do produto? " );
    let price = Number( prompt( "Qual preço do produto? R$ " ) );

    console.log ( repository.insert( name, category, price ) );
}

function list() {
    repository.listAllProducts();
}

function findById() {
    let id = prompt( "Qual o ID do produto? " );
    repository.findById( id );
}

function findForName() {
    let name = prompt( "Qual o nome do produto? " );
    console.log( repository.findForName( name ) );
}

function findForCategory() {
    let category = prompt( "Qual a categoria do produto? " );
    console.log( repository.findForCategory( category ) );
}

function deleteProduct() {
    let id = prompt( "Qual o ID do produto que deseja deletar? " );
    repository.findById( id );
    console.log( repository.deleteProduct( id ) );
}

function update() {
    let id = prompt( "Qual o ID do produto que deseja atualizar? " );
    console.log( repository.findById( id ) );
    let name = prompt( "Qual nome do produto? " );
    let category = prompt( "Qual categoria do produto? " );
    let price = prompt( "Qual preço do produto? R$ " );
    console.log( repository.update( id, name, category, price ) );
}