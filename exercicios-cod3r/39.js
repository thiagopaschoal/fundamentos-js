const troca = (vetor1, vetor2) => {
  if (vetor1.length === vetor2.length) {
    for (let i = 0; i <= vetor1.length - 1; i++) {
      vetor1[i] = vetor1[i] + vetor2[i];
      vetor2[i] = vetor1[i] - vetor2[i];
      vetor1[i] = vetor1[i] - vetor2[i];
    }
  }
  return [vetor1, vetor2];
};

console.log(troca([1, 2, 3, 4], [5, 6, 7, 8]));
