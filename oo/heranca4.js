const carro = {
  velocidadeAtual: 0,
  velocidadeMaxima: 200,
  delta: 5,
  acelerar() {
    if (this.velocidadeAtual + this.delta < this.velocidadeMaxima) {
      this.velocidadeAtual += this.delta
    } else {
      this.velocidadeAtual = this.velocidadeMaxima
    }
  },
  status() {
    return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`
  }
}

const ferrari = {
  modelo: "F40",
  velocidadeAtual: 30,
  status() {
    return `${this.modelo} - ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro);

for (let key in ferrari) {
  ferrari.hasOwnProperty(key) ? console.log(key) : console.log(`Herança: ${key}`);
}

ferrari.acelerar();
console.log(ferrari.status())

const lamborghini = {
  modelo: "gallardo",
  velocidadeMaxima: 450,
  velocidadeAtual: 460,
  status() {
    return `${this.modelo} - ${super.status()}`
  }
}

Object.setPrototypeOf(lamborghini, carro)

lamborghini.acelerar()
console.log(lamborghini.status());