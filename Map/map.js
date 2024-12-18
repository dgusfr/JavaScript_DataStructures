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
