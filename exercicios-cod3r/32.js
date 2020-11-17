const mediaAritmetica = (...numeros) => {
  const total = numeros.reduce((acc, valor) => acc + valor, 0);
  const media = total / numeros.length;
  return media;
};

console.log(mediaAritmetica(2, 2));
