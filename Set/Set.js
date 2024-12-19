const meuSet = new Set();
const numeros = new Set([1, 2, 3, 4]);
numeros.add(5);
numeros.delete(3);
const existe = numeros.has(2);
console.log(existe); // true
numeros.clear();
const tamanho = numeros.size;
console.log(tamanho); // 0
for (let numero of numeros) {
  console.log(numero);
}
