const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(`\nEscolha uma operação para realizar no Set:`);
  console.log("1. Adicionar um elemento");
  console.log("2. Remover um elemento");
  console.log("3. Verificar se um elemento existe");
  console.log("4. Listar todos os elementos");
  console.log("5. Limpar o Set");
  console.log("6. Sair\n");
}

const mySet = new Set();

function startCLI() {
  console.log("Bem-vindo! Comece a gerenciar seu Set.");
  performOperation();
}
