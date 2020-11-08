class Conta {
  constructor(preco, tipo) {
    this._preco = preco
    this._tipo = tipo
  }
  get preco() {
    return this._preco
  }
  get tipo() {
    return this._tipo
  }
}

class ControleDeContas {
  constructor() {
    this.contas = []
  }
  adicionaConta(...params) {
    params.forEach(param => this.contas.push(param))
  }
  totalDeTodasAsContas() {
    let totalDeContas = 0;
    this.contas.forEach(conta => {
      totalDeContas += conta.preco
    })
    return totalDeContas
  }
}

const controleDeContas = new ControleDeContas
controleDeContas.adicionaConta(new Conta(29.90, "Luz"), new Conta(199.90, "Parcela do Carro"))
console.log(controleDeContas.totalDeTodasAsContas())