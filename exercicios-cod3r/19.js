const cardapio = (codigo, quantidade, precoAPagar) => {
  switch (codigo) {
    case 100:
      return precoAPagar * quantidade;
    case 200:
      return precoAPagar * quantidade;
    case 300:
      return precoAPagar * quantidade;
    case 400:
      return precoAPagar * quantidade;
    case 500:
      return precoAPagar * quantidade;
    case 600:
      return precoAPagar * quantidade;
    default:
      console.error("produto nao existe");
  }
};

console.log(cardapio(300, 2, 3.5));
