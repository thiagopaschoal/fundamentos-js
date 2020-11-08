function imprimirSoma(a, b) {
  console.log(a + b);
}

function imprimirSoma(a, b = 0) { // este tipo de declaracao, evita o undefiined caso o segundo parametro nao seja passado
  console.log(a + b);
}

// usando uma funcao anonima e armazenando na variavel
const imprimirSomaUsandoFuncaoAnonima = function(a,b) {
  return a + b
}

// usando uma arrow function
const imprimirSomaUsandoArrowFunction = (a, b) => a + b

imprimirSoma(2,2)
imprimirSoma(3)
imprimirSoma(2,3,4,5,6)

console.log(imprimirSomaUsandoFuncaoAnonima(2,2))
console.log(imprimirSomaUsandoFuncaoAnonima(3))
console.log(imprimirSomaUsandoFuncaoAnonima(2,3,4,5,6))

console.log(imprimirSomaUsandoArrowFunction(2,2))
console.log(imprimirSomaUsandoArrowFunction(3))
console.log(imprimirSomaUsandoArrowFunction(2,3,4,5,6))

const soma = (a,b) => a + b;

const calculadora = (a,b,operacao = soma) => {
  return operacao(a,b)
}

console.log(calculadora(3,2))
console.log(calculadora(4,2, (a,b) => a - b));
console.log(calculadora(3,3, (a,b) => a * b));