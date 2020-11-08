const Animal = {
  _nome: "",
  _peso: 0,
  _tamanho: 0,
  andar() {
    return `${this._nome} esta andando`
  }
}

const mamifero = Object.create(Animal, {
  pelos: {
    writable: true,
    enumerable: true
  }
})
for (let key in mamifero) {
  mamifero.hasOwnProperty(key) ? console.log(key) : console.log(`vindo da herança: ${key}`);
}