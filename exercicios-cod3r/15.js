const carros = (nome) => {
  switch (nome) {
    case "hatch":
      return "Compra efetuada com sucesso";
    case "sedan":
      return "Tem certeza que não prefere este modelo?";
    case "motocicletas":
      return "Tem certeza que não prefere este modelo?";
    case "caminhonetes":
      return "Tem certeza que não prefere este modelo?";
    default:
      return "Não trabalhamos com este tipo de automóvel aqui";
  }
};

console.log(carros("hatch"));
console.log(carros("sedan"));
