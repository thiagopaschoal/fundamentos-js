function ehBissexto(ano) {
  if (ano % 4 == 0 && ano % 400 == 0) {
    console.log(`${ano} é bissexto.`)
  } else if ((ano % 100 != 0) && (ano % 4 == 0)) {
    console.log(`${ano} é bissexto.`)
  } else {
    console.log(`${ano} não é bissexto.`)
  }
  return;
}

console.log(ehBissexto(2016))
console.log(ehBissexto(1993))
console.log(ehBissexto(2020))