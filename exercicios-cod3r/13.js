const dias = {
  1: "fim de semana",
  2: "dia util",
  3: "dia util",
  4: "dia util",
  5: "dia util",
  6: "dia util",
  7: "fim de semana",
};

function ehDiaUtil(dia) {
  const msg = Object.keys(dias).reduce((acc, key) => {
    const toNumber = parseInt(key);
    if (toNumber === dia) return dias[key];
    return acc;
  }, 0);
  return msg === 0 ? "dia invalido" : msg;
}

console.log(ehDiaUtil(12));
console.log(ehDiaUtil(5));
