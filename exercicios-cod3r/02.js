console.log(obterTipoDoTriangulo(2,2,2))
console.log(obterTipoDoTriangulo(2,3,2))
console.log(obterTipoDoTriangulo(3,4,5))

function obterTipoDoTriangulo(lado1, lado2, lado3) {
  if ((lado1 == lado2) && (lado1 === lado3)) {
    return "equilatero"
  } else if ((lado1 == lado2) || (lado1 === lado3)) {
    return "isosceles"
  } else if ((lado1 != lado2) && (lado1 != lado3)) {
    return "escaleno"
  } else {
    return "nao existe triangulo com estes tipos de dados"
  }
}