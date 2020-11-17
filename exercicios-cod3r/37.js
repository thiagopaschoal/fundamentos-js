const progAritmetica = (n, a1, r) => {
  const pa = a1 + (n - 1) * r;

  console.log(`O ${n}° termo de uma P.A é ${pa}`);
};

const progGeometrica = (n, a1, r) => {
  const pg = a1 * r ** (n - 1);

  console.log(`O ${n}° termo de uma P.G é ${pg}`);
};

progAritmetica(16, -10, 3);
progGeometrica(7, 1, 3);
