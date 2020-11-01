console.log(mostraResultadoDasOperacoes(2,2))

function mostraResultadoDasOperacoes(num1, num2) {
  return `
  ${num1} + ${num2} = ${num1 + num2}\n
  ${num1} - ${num2} = ${num1 - num2}\n
  ${num1} * ${num2} = ${num1 * num2}\n
  ${num1} / ${num2} = ${num1 / num2}
  `
}