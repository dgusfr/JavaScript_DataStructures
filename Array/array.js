const frutas = ['maçã', 'banana', 'laranja'];
frutas.forEach(fruta => console.log(fruta));

const notas = [10, 9.5, 8, 7, 6]
const notasAtualizadas = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1);
console.log(notasAtualizadas)

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const nomeCaixaAlta = nomes.map(nome => nome.toUpperCase());
console.log(nomeCaixaAlta);

const alunos = ['Diego', 'Maria', 'José', 'João', 'Pedro'];
const medias = [7, 4.5, 8, 9, 6]
const reprovados = alunos.filter((aluno, indice) =>{
  return medias[indice] < 7 
})
console.log(reprovados)

function SomaNo(notas){
  const soma = notas.reduce((acumulador, nota) => {
    return acumulador + nota
  })

}

console.log(calculaMedia([10, 8, 9, 7, 6]))
