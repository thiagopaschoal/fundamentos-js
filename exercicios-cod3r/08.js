const obterMelhorPiorRecorde = (...pontos) => {
  let recorde = 0;
  let piorPonto = 0;
  let menor = 0;
  if (pontos.length > 1) {
    for (let i = 1; i <= pontos.length - 1; i++) {
      const pontoAtual = pontos[i];
      const pontoAnterior = pontos[i - 1];
      if (pontoAtual > pontoAnterior) {
        recorde++;
      }
    }
    menor = Math.min.apply(Math, pontos);
    piorPonto = pontos.indexOf(menor) + 1;
    return [recorde, piorPonto];
  } else {
    return "vc nao teve nenhuma pontuacao";
  }
};

console.log(obterMelhorPiorRecorde(10, 20, 20, 8, 25, 3, 0, 30, 1));
console.log(obterMelhorPiorRecorde(5, 2, 20, 8, 1, 3, 0, 30, 1));
console.log(obterMelhorPiorRecorde(10, 20, 20, 8, 25, 3, 0, 30, 1, 90, 30));
console.log(obterMelhorPiorRecorde());
