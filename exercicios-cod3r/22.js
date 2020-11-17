const meses = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro",
};

const anuidade = (mes, capital, taxaDeJuros, anuidade) => {
  const janeiro = 1;
  for (let key of Object.keys(mes)) {
    if (mes === janeiro) {
      return taxaDeJuros * anuidade;
    } else if (key === mes) {
      return capital * Math.pow(1 + 0.05, mes);
    }
  }
};

console.log(anuidade(4, 100, 20, 2));
