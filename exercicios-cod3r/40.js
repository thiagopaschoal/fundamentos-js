const notas = (...notas) => {
  return notas.map((nota) => {
    if (nota >= 0.0 && nota < 4.9) {
      return "CONCEITO D";
    } else if (nota >= 5.0 && nota < 6.9) {
      return "CONCEITO C";
    } else if (nota >= 7 && nota < 8.9) {
      return "CONCEITO B";
    } else if (nota >= 9 && nota < 10) {
      return "CONCEITO A";
    }
  });
};

console.log(notas(3, 5, 6, 7, 3, 4));
