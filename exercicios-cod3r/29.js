const quantosNumerosEstaENaoEstaoNoIntervalo = (...numeros) => {
    let qtdDentroDoIntervalo = 0;
    let qtdForaDoIntervalo = 0;
    for (let i = 0; i <= numeros.length; i++) {
        const numero = numeros[i]
        if (numero >= 10 && numero <= 20) {
            qtdDentroDoIntervalo++;
        } else {
            qtdForaDoIntervalo++
        }
    }
    return {
        dentro: qtdDentroDoIntervalo,
        fora: qtdForaDoIntervalo
    }
}

console.log(quantosNumerosEstaENaoEstaoNoIntervalo(30,5,6,7,14,15,20,10,89,19))