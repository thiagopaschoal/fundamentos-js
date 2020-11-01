function obterDelta(a,b,c) {
  const delta = Math.pow(b,2) - (4*a*c)
  return delta > 0 ? "Delta positivo" : "Delta Negativo"
}

console.log(obterDelta(3,-5,12));