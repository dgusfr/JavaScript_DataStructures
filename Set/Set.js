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
const uniao = new Set([...numeros, ...[6, 7, 8]]);
console.log(uniao);
const conjuntoA = new Set([1, 2, 3]);
const conjuntoB = new Set([2, 3, 4]);
const interseccao = new Set([...conjuntoA].filter(x => conjuntoB.has(x)));
console.log(interseccao);
const diferenca = new Set([...conjuntoA].filter(x => !conjuntoB.has(x)));
console.log(diferenca);
const arrayConvertido = Array.from(numeros);
console.log(arrayConvertido);
const setConvertido = new Set([1, 2, 3, 4]);
console.log(setConvertido);

