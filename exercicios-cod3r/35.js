const vetorPilha = [1, 2, 3, 4, 5];

const vetorAdiciona = (vetor) => {
  if (vetor.length > 1) {
    vetorPilha.push(...vetor);
  }
  return vetorPilha;
};

console.log(vetorAdiciona([6, 7, 8, 9]));
