function ehDiaUtil(dia) {
  switch (dia) {
    case 1:
      console.log("fim de semana");
      break;
    case 2:
      console.log("dia util");
      break;
    case 3:
      console.log("dia util");
      break;
    case 4:
      console.log("dia util");
      break;
    case 5:
      console.log("dia util");
      break;
    case 6:
      console.log("dia util");
      break;
    case 7:
      console.log("fim de semana");
      break;
    default:
      console.error("dia invalido")
  }
}
console.log(ehDiaUtil(12))
console.log(ehDiaUtil(5))