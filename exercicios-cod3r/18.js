const numerosPorExtenso = {
  0: "zero",
  1: "um",
  2: "dois",
  3: "tres",
  4: "quatro",
  5: "cinco",
  6: "seis",
  7: "sete",
  8: "oito",
  9: "nove",
  10: "dez",
};

const escreveNumeroPorExtenso = (numero) => {
  const numeroEmExtenso = !isNaN(numero) ? numerosPorExtenso[numero] : null;
  return numeroEmExtenso;
};

for (let i = 0; i < 11; i++) {
  console.log(escreveNumeroPorExtenso(i));
}
