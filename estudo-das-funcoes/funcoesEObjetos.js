console.log(typeof Object)
console.log(typeof new Object);

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto);

function Carro(velocidadeMaxima=300, delta=5) {
  let velocidadeAtual = 0;
  this.acelerar = () => {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }
  this.getVelocidadeAtual = function() {
    return velocidadeAtual
  };
}

const uno = new Carro()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(310,10)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())