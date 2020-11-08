function imprimiNomeComSobrenome() {
  return `Nome: ${this.nome} - Sobrenome: ${this.sobrenome}`
}

function imprimiComMaisDados(cidade, pais) {
  return `Nome: ${this.nome} - Sobrenome: ${this.sobrenome} / Cidade: ${cidade} - Pais: ${pais}`
}

const user = {
  nome: 'Thiago',
  sobrenome: 'Paschoal'
}

console.log(imprimiNomeComSobrenome.call(user))
console.log(imprimiComMaisDados.apply(user, ["Sao Paulo", "Brasil"]))