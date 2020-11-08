function Pessoa() {
}

console.log(Pessoa.prototype);
const pai = new Pessoa
const mae = new Pessoa

console.log(Pessoa.__proto__ === Function.prototype);
console.log(Object.prototype.__proto__ == null);
console.log(pai.__proto__ === Pessoa.prototype, Pessoa.__proto__ === Function.prototype, Function.prototype.__proto__ === Object.prototype);
console.log(pai.__proto__ === mae.__proto__)
console.log(Pessoa.prototype === mae.__proto__)

const vingadores = ["Iron Man", "Captain America", "Thor"]
console.log(vingadores.__proto__ === Array.prototype, Array.__proto__ === Function.prototype)

Pessoa.prototype.nome = "Thiago"
Pessoa.prototype.falar = function () {
  return `Bom dia, eu sou o ${this.nome}`
}

const irmao = new Pessoa()
irmao.nome = "matheus"
console.log(irmao.falar());

const irma = irmao
irma.nome = "laura"
console.log(irma.falar())

