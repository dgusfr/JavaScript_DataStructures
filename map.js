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

const myMap = new Map();

function startCLI() {
  console.log("Bem-vindo! Comece a gerenciar seu Map.");
  performOperation();
}

function addKeyValue() {
  rl.question("Digite a chave: ", (key) => {
      rl.question("Digite o valor: ", (value) => {
          myMap.set(key, value);
          console.log(`Par adicionado: {${key}: ${value}}`);
          performOperation();
      });
  });
}

function removeKey() {
  rl.question("Digite a chave para remover: ", (key) => {
      if (myMap.delete(key)) {
          console.log(`Chave "${key}" removida com sucesso.`);
      } else {
          console.log(`Chave "${key}" não encontrada.`);
      }
      performOperation();
  });
}



function performOperation() {
  displayMenu();
  rl.question("Digite a opção desejada: ", (option) => {
      switch (option) {
          case "1":
              addKeyValue();
              break;
          case "2":
              removeKey();
              break;
          case "3":
              updateValue();
              break;
          case "4":
              getValue();
              break;
          case "5":
              listEntries();
              break;
          case "6":
              checkKeyExists();
              break;
          case "7":
              checkValueExists();
              break;
          case "8":
              clearMap();
              break;
          case "9":
              exitCLI();
              break;
          default:
              console.log("Opção inválida. Tente novamente.");
              performOperation();
              break;
      }
  });
}
