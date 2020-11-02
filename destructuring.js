const Cliente = {
  nome: "Thiago",
  idade: "27",
  endereco: {
    logradouro: "Rua Aperema",
    numero: "75"
  }
}

console.log("destructuring usando objeto.....");
const { nome, idade, endereco: { logradouro } } = Cliente
console.log(`${nome} tem ${idade} anos. Ele mora na ${logradouro}`);

const { nome: n, idade: i, endereco: { logradouro: l} } = Cliente
console.log(`${n} tem ${i} anos. Ele mora na ${l}`);

const { sobrenome } = Cliente
console.log(sobrenome);

console.log("destructuring usando array.....");
const vingadores = ["Capitao America", "Homem de Ferro", "Thor", "Hulk", "Gaviao Arqueiro", "Viuva Negra"]
const [primeiroVingador, ,filhoDeOdin] = vingadores
console.log(primeiroVingador, filhoDeOdin);

console.log("destructuring usando functions.....");
const rand = ({min = 0, max = 1000}) => {
  const valor = Math.random() * (max - min) + min
  return valor
}

// console.log(rand())
console.log(rand({min: 1, max: 2}));