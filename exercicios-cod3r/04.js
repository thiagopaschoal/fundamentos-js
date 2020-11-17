const mostraDividendoEResto = (dividendo, divisor) => {
  return `Resultado da divisão: ${dividendo / divisor} - Resto: ${
    dividendo % divisor
  }`;
};

console.log(mostraDividendoEResto(2, 2));
