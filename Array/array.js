// Importa o módulo readline para interagir com o usuário
const readline = require("readline");

// Cria a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para exibir o menu de opções
function displayMenu() {
    console.log(`\nEscolha uma operação para executar no array:`);
    console.log("1. Adicionar elemento ao final (push)");
    console.log("2. Remover o último elemento (pop)");
    console.log("3. Adicionar elemento ao início (unshift)");
    console.log("4. Remover o primeiro elemento (shift)");
    console.log("5. Ordenar os elementos (sort)");
    console.log("6. Reverter a ordem dos elementos (reverse)");
    console.log("7. Remover elementos (splice)");
    console.log("8. Sair\n");
}

// Função para executar operações no array
function performOperation(array) {
    displayMenu();

    rl.question("Digite a opção desejada: ", (option) => {
        switch (option) {
            case "1":
                rl.question("Digite o elemento para adicionar ao final: ", (element) => {
                    array.push(element);
                    console.log("Array modificado:", array);
                    performOperation(array);
                });
                break;
            case "2":
                const removedLast = array.pop();
                console.log("Elemento removido:", removedLast);
                console.log("Array modificado:", array);
                performOperation(array);
                break;
            case "3":
                rl.question("Digite o elemento para adicionar ao início: ", (element) => {
                    array.unshift(element);
                    console.log("Array modificado:", array);
                    performOperation(array);
                });
                break;
            case "4":
                const removedFirst = array.shift();
                console.log("Elemento removido:", removedFirst);
                console.log("Array modificado:", array);
                performOperation(array);
                break;
            case "5":
                array.sort();
                console.log("Array ordenado:", array);
                performOperation(array);
                break;
            case "6":
                array.reverse();
                console.log("Array revertido:", array);
                performOperation(array);
                break;
            case "7":
                rl.question("Digite o índice inicial para remoção: ", (startIndex) => {
                    rl.question("Digite a quantidade de elementos para remover: ", (deleteCount) => {
                        const removed = array.splice(Number(startIndex), Number(deleteCount));
                        console.log("Elementos removidos:", removed);
                        console.log("Array modificado:", array);
                        performOperation(array);
                    });
                });
                break;
            case "8":
                console.log("Encerrando o programa...");
                rl.close();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                performOperation(array);
                break;
        }
    });
}

// Solicita ao usuário o array inicial
rl.question("Digite os elementos do array separados por vírgula: ", (input) => {
    const array = input.split(",").map((item) => item.trim());
    console.log("Array inicial:", array);
    performOperation(array);
});
