const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

// sem usar a funcao map
const nomeDaEmpresaEDonoSemMap = []
for (let index in empresas) {
  const empresa = empresas[index]
  const { nome: nomeDaEmpresa, CEO: dono } = empresa
  let obj = {
    nome: nomeDaEmpresa,
    CEO: dono
  }
  nomeDaEmpresaEDonoSemMap.push(obj)
}

console.log(nomeDaEmpresaEDonoSemMap);

// usando a funcao map
const nomeDaEmpresaEDonoComMap = empresas.map(({ nome: nomeDaEmpresa, CEO: dono }) => {
  let obj = {
    nome: nomeDaEmpresa,
    CEO: dono
  }
  return obj
});

console.log(nomeDaEmpresaEDonoComMap);