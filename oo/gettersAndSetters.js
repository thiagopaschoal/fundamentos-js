const Animal = {
  _nome: "Sophi", /* nao existe atributos/metodos privados em JS. Isso é apenas uma convencao */
  _tipo: "Cachorro",
  get fullText() {
    return `A(o) ${this._nome} é um(a) ${this._tipo}`
  },
  set nome(nome) {
    if (nome != this._nome) {
      this._nome = nome
    }
  }
}

console.log(Animal.fullText);
Animal.nome = "Drup"
console.log(Animal.fullText);