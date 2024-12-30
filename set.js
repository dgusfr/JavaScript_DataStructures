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

function performOperation() {
  displayMenu();
  rl.question("Digite a opção desejada: ", (option) => {
      switch (option) {
          case "1":
              addElement();
              break;
          case "2":
              removeElement();
              break;
          case "3":
              checkElementExists();
              break;
          case "4":
              listElements();
              break;
          case "5":
              clearSet();
              break;
          case "6":
              exitCLI();
              break;
          default:
              console.log("Opção inválida. Tente novamente.");
              performOperation();
              break;
      }
  });
}

function addElement() {
  rl.question("Digite o elemento para adicionar: ", (element) => {
      if (mySet.has(element)) {
          console.log(`O elemento "${element}" já existe no Set.`);
      } else {
          mySet.add(element);
          console.log(`Elemento "${element}" adicionado ao Set.`);
      }
      performOperation();
  });
}

function removeElement() {
  rl.question("Digite o elemento para remover: ", (element) => {
      if (mySet.delete(element)) {
          console.log(`Elemento "${element}" removido do Set.`);
      } else {
          console.log(`Elemento "${element}" não encontrado no Set.`);
      }
      performOperation();
  });
}

function checkElementExists() {
  rl.question("Digite o elemento para verificar: ", (element) => {
      console.log(mySet.has(element)
          ? `O elemento "${element}" existe no Set.`
          : `O elemento "${element}" não foi encontrado.`);
      performOperation();
  });
}

function listElements() {
  if (mySet.size === 0) {
      console.log("O Set está vazio.");
  } else {
      console.log("Elementos no Set:");
      mySet.forEach((element) => {
          console.log(element);
      });
  }
  performOperation();
}

