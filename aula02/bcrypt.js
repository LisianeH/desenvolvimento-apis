const bcrypt = require('bcrypt');

function getMensagem() {
  const texto = "Hello World";
  const textoHash = bcrypt.hashSync(texto, 10);
  const isMatch = bcrypt.compareSync(texto, textoHash);
  const isNotMatch = bcrypt.compareSync("Errado", textoHash);
  return `Texto: ${texto} \nHash: ${textoHash} \nCompare: ${isMatch} \nCompare errado: ${isNotMatch}`;
}

module.exports = getMensagem;