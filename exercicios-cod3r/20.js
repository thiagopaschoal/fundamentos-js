function notasNecessarias(valor) {
  let qtd100 = 0;
  let qtd50 = 0;
  let qtd10 = 0;
  let qtd5 = 0;
  let qtd1 = 0;

  while(true) {
    if (valor == 0) break;
    if (valor >= 100) {
      qtd100++
      valor -= 100
    } else if (valor >= 50) {
      qtd50++
      valor -= 50
    } else if (valor >= 10) {
      qtd10++
      valor -= 10
    } else if (valor >= 5) {
      qtd5++
      valor -= 5
    } else {
      qtd1++
      valor -= 1
    }
  }
  return `
    ${qtd100} nota(s) de R$ 100 - 
    ${qtd50} nota(s) de R$ 50 - 
    ${qtd10} nota(s) de R$ 10 - 
    ${qtd5} nota(s) de R$ 5 - 
    ${qtd1} nota(s) de R$ 1
  `
}
console.log(notasNecessarias(18))
console.log(notasNecessarias(250))