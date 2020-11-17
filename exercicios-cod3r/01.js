const mostraResultadoDasOperacoesAF = (num1, num2) => {
  return `
    ${num1} + ${num2} = ${num1 + num2}\n
    ${num1} - ${num2} = ${num1 - num2}\n
    ${num1} * ${num2} = ${num1 * num2}\n
    ${num1} / ${num2} = ${num1 / num2}
  `;
};

console.log(mostraResultadoDasOperacoesAF(2, 2));
