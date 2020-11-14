const imprimir = (palavra, quantidade) => {
    let contador = 0;
    while (contador <= quantidade) {
        console.log(palavra)
        contador++;
    }
}

imprimir("Hello World!", 11)