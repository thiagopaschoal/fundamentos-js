const pessoa = {
  nome: "Thiago",
  idade: 27
}

Object.preventExtensions(pessoa)

console.log(Object.isExtensible(pessoa))
pessoa.nome = "Thiago Sakurai Paschoal"
pessoa.descricao = "Software Engineer"
delete pessoa.idade

console.log(pessoa);

const ironMan = {
  nome: "Tony Stark",
  profession: "Engineer"
}

Object.seal(ironMan)

console.log(Object.isSealed(ironMan))
delete ironMan.nome
ironMan.villansGallery = ["Whiplash", "Monge de Ferro", "Aldrich Kllian", "Mandarim", "Fing Fang Foom"]
ironMan.profession = "Engineer - Genious, Billionary, Playboy and Philantrops"

console.log(ironMan);