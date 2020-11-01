console.log(mostraDinheiroDaFormaCorreta(0.30000000000000004));

function mostraDinheiroDaFormaCorreta(numero) {
  return `R$ ${numero.toFixed(2).replace(".", ",")}`
}