const Funcionario = {
  _nome: "Thiago",
  _departamento: "TI",
  _salario: 500.00,
  obterSalarioComBonificacao(bonificacao) {
    this._salario *= bonificacao
  },
  get salario() {
    return this._salario
  },
  set salario(salario) {
    if (salario > 0) {
      this._salario = salario
    }
  }
}

Funcionario.salario = 2000
console.log(`Salário Atual: ${Funcionario.salario}`);
Funcionario.obterSalarioComBonificacao(0.5)
console.log(`Salário Atual (depois da bonificação): ${Funcionario.salario}`);