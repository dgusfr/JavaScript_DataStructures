const meuMap = new Map();
const capitais = new Map([
  ['Brasil', 'Brasília'],
  ['França', 'Paris'],
  ['Japão', 'Tóquio']
]);
capitais.set('Canadá', 'Ottawa');
const capitalBrasil = capitais.get('Brasil');
console.log(capitalBrasil); // Brasília
const existeJapao = capitais.has('Japão');
console.log(existeJapao); // true
capitais.delete('França');
const tamanho = capitais.size;
console.log(tamanho); // 3
for (let pais of capitais.keys()) {
  console.log(pais);
}
for (let capital of capitais.values()) {
  console.log(capital);
}
for (let [pais, capital] of capitais.entries()) {
  console.log(`${pais}: ${capital}`);
}
capitais.clear();
const copia = new Map(capitais);
const objetosComoChave = new Map();
const obj = { id: 1 };
objetosComoChave.set(obj, 'Objeto associado');
const valoresNumericos = Array.from(capitais.values());
console.log(valoresNumericos);
const chavesArray = Array.from(capitais.keys());
console.log(chavesArray);
const mapToObject = Object.fromEntries(capitais);
console.log(mapToObject);
const arrayToMap = new Map([['a', 1], ['b', 2]]);
console.log(arrayToMap);
