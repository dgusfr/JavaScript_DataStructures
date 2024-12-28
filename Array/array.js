// Importa o módulo readline para interagir com o usuário
const readline = require("readline");

// Cria a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Solicita ao usuário o array inicial
rl.question("Digite os elementos do array separados por vírgula: ", (input) => {
    const array = input.split(",").map((item) => item.trim());
    console.log("Array inicial:", array);
    performOperation(array);
});
