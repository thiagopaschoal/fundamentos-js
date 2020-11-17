const obterValorDaAplicacaoByJurosSimples = (capital, taxaDeJuros, tempo) => {
  return capital * taxaDeJuros * tempo;
};

const obterValorDaAplicacaoByJurosCompostos = (capital, taxaDeJuros, tempo) => {
  return capital * Math.pow(1 + taxaDeJuros, tempo);
};

console.log(obterValorDaAplicacaoByJurosSimples(3000, 0.05, 2));
console.log(obterValorDaAplicacaoByJurosCompostos(3000, 0.05, 2));
