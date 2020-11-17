const aprovadoOuReprovado = (nota) => {
  if (nota >= 0 && nota < 100) return nota < 40 ? "reprovado" : "aprovado";
};

console.log(aprovadoOuReprovado(20));
