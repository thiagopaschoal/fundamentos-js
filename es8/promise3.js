const gerarNumeroAleatorio = (min = 1, max = 1000) => {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = (max - min) + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeroAleatorio(2,5)
    .then(v => v * 10)
    .then(v => `Valor multiplicado por 10 é igual há ${v}`)
    .then(console.log)