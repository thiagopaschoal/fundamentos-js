const impares = (inicio = 0, fim = 100) => {
  if (inicio > fim) {
    [fim, inicio] = [inicio, fim];
  }
  const impares = [];
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 != 0) {
      impares.push(i);
    }
  }
  return impares;
};

console.log(impares(20, 10));
