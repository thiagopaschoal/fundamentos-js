const fatorial = (numero) => {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
};

console.log(`O fatorial de 2 é ${fatorial(2)}`);
console.log(`O fatorial de 3 é ${fatorial(3)}`);
