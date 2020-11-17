const feira = (fruta) => {
  switch (fruta) {
    case "maçã":
      return "Não vendemos esta fruta aqui";
    case "kiwi":
      return "Estamos com escassez de kiwis";
    case "melancia":
      return "Aqui está, são 3 reais o quilo";
    default:
      return "fruta invalida";
  }
};

console.log(feira("kiwi"));
console.log(feira("maçã"));
console.log(feira("melancia"));
console.log(feira("caju"));
