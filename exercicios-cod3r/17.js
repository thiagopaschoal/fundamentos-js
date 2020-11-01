function realizaBonificacao(plano, salarioAtual) {
  switch (plano.toUpperCase()) {
    case 'A':
      return salarioAtual * 0.10;
    case 'B':
      return salarioAtual * 0.15;
    case 'C':
      return salarioAtual * 0.20;
    default:
      console.error("plano invalido")
  }
}

console.log(realizaBonificacao("a", 1000))
console.log(realizaBonificacao("c", 2500))
console.log(realizaBonificacao("b", 5000))
console.log(realizaBonificacao("e", 1000))