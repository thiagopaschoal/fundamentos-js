const formataDinheiro = (partes, ...valores) => {
  const resultado = []
  valores.map((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    resultado.push(partes[indice], valor)
  })
  return resultado.join("")
}

const formataCpfs = (partes, ...cpfs) => {
  const cpfregex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  const cpfsFormatados = []
  cpfs.map((cpf, indice) => {
    console.log(cpf.length);
    cpf = (!isNaN(cpf) && cpf.length == 11) ? cpf.replace(cpfregex, "$1.$2.$3-$4") : cpf
    cpfsFormatados.push(partes[indice], cpf)
  })
  return cpfsFormatados.join("")
}

const preco = 299.90
const precoParcela = 11
console.log(formataDinheiro`1x de ${preco} ou 3x de ${precoParcela}.`);

console.log(formataCpfs`${"99999999999"}, ${'88888888888'}, ${"77777777777777"}.`);