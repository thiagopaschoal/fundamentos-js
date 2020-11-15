const espera = (tempo = 1500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

espera(2000)
    .then(() => espera(2000))
    .then(espera)