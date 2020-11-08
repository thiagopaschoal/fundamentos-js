const x = 3

function fora() {
  // const x = 'local'
  return function dentro() {
    return x
  }
}

console.log(fora()())