const maiorEMenor = (...numeros) => {
  let maior = Number.NEGATIVE_INFINITY;
  let menor = Infinity;
  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero >= maior) {
      maior = numero;
    }
    if (numero <= menor) {
      menor = numero;
    }
  }
  return { maior, menor };
};

console.log(maiorEMenor(30, 5, 6, 7, 14, 15, 20, 10, 89, 19, 100));
