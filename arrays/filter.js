const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

// sem usar o filter
const empresasCriadasDepoisDe2000SemFilter = []
for (let index in empresas) {
  const empresa = empresas[index];
  if (empresa.anoDeCriacao > 2000) {
    empresasCriadasDepoisDe2000SemFilter.push(empresa)
  } 
}

console.log(empresasCriadasDepoisDe2000SemFilter);

// usando o filter
const empresasCriadasDepoisDe2000ComFilter = empresas.filter(empresa => empresa.anoDeCriacao > 2000)
console.log(empresasCriadasDepoisDe2000ComFilter);