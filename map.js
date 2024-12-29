const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(`\nEscolha uma operação para realizar no Map:`);
  console.log("1. Adicionar uma chave-valor");
  console.log("2. Remover uma chave");
  console.log("3. Atualizar valor por chave");
  console.log("4. Obter valor por chave");
  console.log("5. Listar todas as chaves e valores");
  console.log("6. Verificar se uma chave existe");
  console.log("7. Verificar se um valor existe");
  console.log("8. Limpar o Map");
  console.log("9. Sair\n");
}
