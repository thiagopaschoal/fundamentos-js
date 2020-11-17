const mostraDinheiroDaFormaCorreta = (numero) =>
  `R$ ${numero.toFixed(2).replace(".", ",")}`;
console.log(mostraDinheiroDaFormaCorreta(0.30000000000000004));
