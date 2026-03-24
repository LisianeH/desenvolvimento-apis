const prompt = require('prompt-sync')();

let valorTotal = 0;
let valorFinalCompra = 0;
let listaProdutos = [];

console.log( "Vamos cadastrar os produtos para sua compra!" );
const qtdProdutos = parseInt( prompt( "Quantos produtos você deseja cadastrar? ") );

for ( let i = 1; i <= qtdProdutos; i++ ) {
    const produto = prompt( "Digite o nome do produto " + i + ": " );
    const preco = parseFloat( prompt( "Digite o preço unitário do produto " + i + ": R$ " ) );
    const quantidade = parseInt( prompt( "Digite a quantidade do produto " + i + ": " ) );
    listaProdutos.push( { produto, preco, quantidade } );
    let precoPorProduto = preco * quantidade;
    valorTotal += precoPorProduto;
    prompt();
}

console.log( "\nCondições de pagamento:" +
    "\n1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto" +
    "\n2 - À Vista no cartão de crédito, recebe 10% de desconto" +
    "\n3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros" +
    "\n4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%\n" );
let pagamento = prompt( "Qual será a forma de pagamento: " );

switch ( pagamento ) {
    case "1":
        valorFinalCompra = valorTotal * 0.85;
        pagamento = "À Vista em Dinheiro ou Pix, recebe 15% de desconto";
        break;
    case "2":
        valorFinalCompra = valorTotal * 0.90;
        pagamento = "À Vista no cartão de crédito, recebe 10% de desconto";
        break;
    case "3":
        valorFinalCompra = valorTotal;
        pagamento = "Parcelado no cartão em duas vezes, preço normal do produto sem juros";
        break;
    case "4":
        valorFinalCompra = valorTotal * 1.10;
        pagamento = "Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%";
        break;
    default:
        prompt( "Opção de pagamento inválida." );
}


console.log( "\nProdutos selecionados: \n" );
for ( let i = 0; i < listaProdutos.length; i++ ) {
    let unidade = listaProdutos[i].quantidade == 1 ? "unidade" : "unidades";
    console.log(
        listaProdutos[i].produto +
        " - R$ " + listaProdutos[i].preco.toFixed(2) +
        " - " + listaProdutos[i].quantidade +
        " " + unidade
    );
}

console.log(
    "\nTotal: R$ " + valorTotal.toFixed(2) +
    "\n> " + pagamento +
    "\nValor Final: R$ " + valorFinalCompra.toFixed(2)
);