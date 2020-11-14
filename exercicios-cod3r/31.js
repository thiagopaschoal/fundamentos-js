const quantosNumerosSaoNegativos = (...numeros) => {
    const quantidadeDeNegativos = numeros.reduce((acc, valor) => {
        if (valor < 0) acc++
        return acc++
    }, 0)
    return { quantidadeDeNegativos }
}

console.log(quantosNumerosSaoNegativos(30,5,6,7,-14,15,-20,10,89,19, 100))