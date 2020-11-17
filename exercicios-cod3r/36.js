const multiplicaTodosPorElemento = (multiplicador, ...numeros) => {
  return numeros.map((num) => num * multiplicador);
};

const multiplicaTodosPorElementoComCriterio = (multiplicador, ...numeros) => {
  if (multiplicador > 5) {
    return multiplicaTodosPorElemento(multiplicador, ...numeros);
  }
};

console.log(multiplicaTodosPorElemento(2, 3, 4, 5));
console.log(multiplicaTodosPorElementoComCriterio(3, 4, 5, 6));
console.log(multiplicaTodosPorElementoComCriterio(8, 4, 5, 6));
