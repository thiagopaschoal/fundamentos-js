function calculadora(operador, ...numeros) {
  const [num1, num2] = numeros;
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.error("operacao invalida");
  }
}

console.log(calculadora("+", 2, 3));
console.log(calculadora("-", 4, 3));
console.log(calculadora("*", 2, 3));
console.log(calculadora("/", 25, 5));
console.log(calculadora("%", 25, 5));
