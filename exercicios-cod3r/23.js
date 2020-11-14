const _calculaMedia = (...notas) => {

    // ordernando o array em ordem decrescente
    notas.sort((nota1, nota2) => nota2 - nota1);
    const [maiorNota, ...outrasNotas] = notas;
    const maiorNotaComPeso = maiorNota * 4;
    const outrasNotasComPeso = outrasNotas.map(nota => nota * 3);
    const notasFinais = outrasNotasComPeso.concat(maiorNotaComPeso);
    const somatorioFinal = notasFinais.reduce((acc, valor) => {
        return acc + valor
    }, 0);
    const mediaFinal = somatorioFinal / 7;
    return mediaFinal;
}

const situacaoDoAluno = (id, ...notas) => {
    if (notas.length > 0) {
        const mediaFinal = _calculaMedia(...notas);
        return { 
            id, 
            notas, 
            mediaFinal, 
            situacao: mediaFinal >= 5 ? "APROVADO" :  "REPROVADO"
        }
    } else {
        console.error("Notas não podem ser vazias!!!")
    }
}

console.log(situacaoDoAluno(1, 2.5, 4, 6.5))