const totalDeParesEImpares = (...numeros) => {
  const quantidadeDePares = numeros.reduce((acc, value) => {
    if (value % 2 == 0) acc++;
    return acc;
  }, 0);
  const quantidadeDeImpares = numeros.reduce((acc, value) => {
    if (value % 2 != 0) acc++;
    return acc;
  }, 0);
  return {
    quantidadeDeImpares,
    quantidadeDePares,
  };
};

console.log(totalDeParesEImpares(24, 6, 23, 5, 7, 9, 10));
