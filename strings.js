function removeEspacoEmBranco(texto) {
  return texto.toLowerCase().split(" ").join("")
}

function removerCaracteresEspeciais(texto) {
  return texto.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
}

function reverse(texto) {
  let palavraAoContrario = []
  for (let i = texto.length; i >= 0; i--) {
    palavraAoContrario.push(texto.charAt(i))
  }
  return palavraAoContrario.join("").toLowerCase()
}

function isPalindromo(palavra) {
  palavra = removerCaracteresEspeciais(palavra)
  palavra = removeEspacoEmBranco(palavra)
  const palavraAoContrario = reverse(palavra)
  return palavra === palavraAoContrario
}

console.log(isPalindromo("arara"))
console.log(isPalindromo("hannah"))
console.log(isPalindromo("laura"))
console.log(isPalindromo("Roma me tem amor."))
console.log(isPalindromo("Olé! Maracujá, caju, caramelo!"))
console.log(isPalindromo("A Rita, sobre vovô, verbos atira."))
console.log(isPalindromo("thiago"));