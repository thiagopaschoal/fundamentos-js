const gerarNumeroAleatorio = (min = 1, max = 1000, ...repetidos) => {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = (max - min) + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (repetidos.includes(aleatorio)) {
            reject('numero repetido, não vale!!!')
        }
        resolve(aleatorio)
    })
}

gerarNumeroAleatorio(2,5, 1,3)
    .then(console.log)
    .catch(console.log)