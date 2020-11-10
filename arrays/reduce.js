const alunos = [
  {
    nome: "Joao",
    nota: 7.3,
    bolsista: true
  },
  {
    nome: "Patricia",
    nota: 9.2,
    bolsista: false
  },
  {
    nome: "Pedro",
    nota: 9.8,
    bolsista: false
  },
  {
    nome: "Ana",
    nota: 8.7,
    bolsista: false
  }
]

// desafio1 - todos os alunos sao bolsistas?

const todosSaoBolsistas = alunos.map(aluno => aluno.bolsista).reduce((acc, isBolsista) => {
  return acc && isBolsista
})

console.log(todosSaoBolsistas);

// desafio2 - alguem é bolsista?

const temAlunoBolsista = alunos.map(aluno => aluno.bolsista).reduce((acc, isBolsista) => {
  return acc || isBolsista
})

console.log(temAlunoBolsista);

// desafio3 - quantidade de alunos bolsista

const quantosAlunosSaoBolsistas = alunos.map(aluno => aluno.bolsista).reduce((acc, isBolsista) => {
  if (isBolsista) acc++
  return acc
}, 0)

console.log(quantosAlunosSaoBolsistas);

// desafio 4 - total de notas

const totalizadorDeNotas = alunos.map(aluno => aluno.nota).reduce((acc, nota) => {
  return acc + nota
})

console.log(totalizadorDeNotas);

// desafio 5 - quantidade de nomes que comecam com P
const nomesQueComecamComP = alunos.map(aluno => aluno.nome).reduce((acc, nome) => {
  if (nome && nome.toLowerCase().startsWith("p")) {
    acc++
  }
  return acc
}, 0)

console.log(nomesQueComecamComP);