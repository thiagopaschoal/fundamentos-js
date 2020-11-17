const valorPagoNoPlanoDeSaude = (idade) => {
  const adicional = 0.2;
  const valorComumATodos = 100.0 + adicional;
  let valorPago;
  if (idade < 10) {
    valorPago = 80 * valorComumATodos;
  } else if (idade >= 10 && idade < 30) {
    valorPago = 50 * valorComumATodos;
  } else if (idade >= 30 && idade < 60) {
    valorPago = 95 * valorComumATodos;
  } else if (valor >= 60) {
    valorPago = 130 * valorComumATodos;
  }
  return valorPago;
};

console.log(valorPagoNoPlanoDeSaude(20));
