const prompt = require( "prompt-sync" )();
const repository = require( "./produto_repository_json.js" );

console.log( "Vamos iniciar a aplicação!" );
( async function mainLoop() {
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
            await create();
            break;
            case "2":
            await list();
            break;
            case "3":
            await findById();
            break;
            case "4":
            await findForName();
            break;
            case "5":
            await findForCategory();
            break;
            case "6":
            await update();
            break;
            case "7":
            await deleteProduct();
            break;
            case "8":
            console.log( "Finalizando... Obrigado!" );
            return;
            default:
            console.log( "Nenhuma opção disponível" );
        }
    }
} ) (); 

async function create() {
    console.log();
    let name = prompt( "Qual nome do produto? " );
    let category = prompt( "Qual categoria do produto? " );
    let price = Number( prompt( "Qual preço do produto? R$ " ) );

    console.log ( await repository.insert( name, category, price ) );
}

async function list() {
    await repository.listAllProducts();
}

async function findById() {
    let id = prompt( "Qual o ID do produto? " );
    await repository.findById( id );
}

async function findForName() {
    let name = prompt( "Qual o nome do produto? " );
    console.log( await repository.findForName( name ) );
}

async function findForCategory() {
    let category = prompt( "Qual a categoria do produto? " );
    console.log( await repository.findForCategory( category ) );
}

async function deleteProduct() {
    let id = prompt( "Qual o ID do produto que deseja deletar? " );
    await repository.findById( id );
    console.log( await repository.deleteProduct( id ) );
}

async function update() {
    let id = prompt( "Qual o ID do produto que deseja atualizar? " );
    await repository.findById( id );
    let name = prompt( "Qual nome do produto? " );
    let category = prompt( "Qual categoria do produto? " );
    let price = prompt( "Qual preço do produto? R$ " );
    console.log( await repository.update( id, name, category, price ) );
}