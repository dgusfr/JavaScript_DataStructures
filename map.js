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

function updateValue() {
  rl.question("Digite a chave para atualizar: ", (key) => {
      if (myMap.has(key)) {
          rl.question("Digite o novo valor: ", (newValue) => {
              myMap.set(key, newValue);
              console.log(`Valor atualizado: {${key}: ${newValue}}`);
              performOperation();
          });
      } else {
          console.log(`Chave "${key}" não encontrada.`);
          performOperation();
      }
  });
}

function getValue() {
  rl.question("Digite a chave para obter o valor: ", (key) => {
      if (myMap.has(key)) {
          console.log(`Valor associado à chave "${key}": ${myMap.get(key)}`);
      } else {
          console.log(`Chave "${key}" não encontrada.`);
      }
      performOperation();
  });
}

function listEntries() {
  if (myMap.size === 0) {
      console.log("O Map está vazio.");
  } else {
      console.log("Entradas no Map:");
      myMap.forEach((value, key) => {
          console.log(`{${key}: ${value}}`);
      });
  }
  performOperation();
}

function checkKeyExists() {
  rl.question("Digite a chave para verificar: ", (key) => {
      console.log(myMap.has(key) ? `A chave "${key}" existe no Map.` : `A chave "${key}" não foi encontrada.`);
      performOperation();
  });
}

function checkValueExists() {
  rl.question("Digite o valor para verificar: ", (value) => {
      const exists = Array.from(myMap.values()).includes(value);
      console.log(exists ? `O valor "${value}" existe no Map.` : `O valor "${value}" não foi encontrado.`);
      performOperation();
  });
}

function clearMap() {
  myMap.clear();
  console.log("O Map foi limpo com sucesso.");
  performOperation();
}

function exitCLI() {
  console.log("Encerrando o programa. Até logo!");
  rl.close();
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

startCLI();

