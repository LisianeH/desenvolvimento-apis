const bcrypt = require('bcrypt');
const prompt = require('prompt-sync')();

const texto = prompt("Digite um texto: ");

const textoHash = bcrypt.hashSync(texto, 10);

console.log("Texto:", texto);
console.log("Hash:", textoHash);

console.log("Compare correto:", bcrypt.compareSync(texto, textoHash));
console.log("Compare errado:", bcrypt.compareSync("Errado", textoHash));