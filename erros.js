const imprimirNome = ({name}) => {
  try {
    return `${name.toUpperCase()}!!!`
  } catch (e) {
    throw "Ocorre um erro ao fazer o destructuring do objeto passado como parametro"
  }
}

console.log(imprimirNome({name: "Thiago"}))
console.log(imprimirNome({nome: "Thiago"}))