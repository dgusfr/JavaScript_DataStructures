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
