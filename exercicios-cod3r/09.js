function aprovadoOuReprovado(nota) {
  if (nota >= 0 && nota < 100) {
    if (nota < 40) {
      return "reprovado"
    }
  }
}
console.log(aprovadoOuReprovado(20))