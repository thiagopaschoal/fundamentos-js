const comparaStrings = (string1, string2) => {
  for (let i = 0; i <= string2.length; i++) {
    const letra = string2.toLowerCase().charAt(i);
    const outraPalavra = string1.toLowerCase().charAt(i);
    if (!outraPalavra.includes(letra)) {
      // achando o primeiro erro já sai do método
      return false;
    }
  }
  return true;
};

console.log(comparaStrings("Banana", "Ban"));
console.log(comparaStrings("Hum", "H um"));
console.log(comparaStrings("CaRoLiNa", "cArOlInA"));
console.log(comparaStrings("BLOG", "GLOB"));
