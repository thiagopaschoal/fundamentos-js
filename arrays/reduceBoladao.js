const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

// sem usar reduce
let sum = 0
for (let index in empresas) {
  const empresa = empresas[index]
  if (empresa.valorDeMercado) {
    sum += empresa.valorDeMercado
  }
}

console.log(sum);

// com reduce
const valorDeMercadoDasEmpresasComReduce = empresas
  .map(empresa => empresa.valorDeMercado)
  .reduce((acc, valorDoMercado) => {
    return acc + valorDoMercado
  })

console.log(valorDeMercadoDasEmpresasComReduce);