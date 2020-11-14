const acharPares = (to, from) => {
    const pares = [];
    for (let i = to; i <= from; i++) {
        if (i % 2 == 0) {
            pares.push(i)
        }
    }
    return pares
}

console.log(acharPares(1, 100))