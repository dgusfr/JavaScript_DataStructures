const frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
frutas.pop();
frutas.unshift('abacaxi');
frutas.shift();
console.log(frutas[1]);
frutas[1] = 'manga';
console.log(frutas.length);
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

frutas.forEach(fruta => console.log(fruta));
const filtradas = frutas.filter(fruta => fruta.includes('a'));
const emMaiusculas = frutas.map(fruta => fruta.toUpperCase());

