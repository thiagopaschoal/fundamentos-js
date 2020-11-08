function Animal(nome, tipo) {
  this.nome = nome
  this.tipo = tipo
}

const cachorro = new Animal("Sophi", "Cachorro")
console.log(cachorro);

const criaObjeto = (f, ...params) => {
  let obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)
  return obj
}

const gato = criaObjeto(Animal, "Peter", "Gato")
console.log(gato);