var a = 2
console.log(a);

function qualquer() {
  console.log(a);
  a = 3
  console.log(a);
}

qualquer()

function getValor() {
  // var retornarValor = undefined
  // var retornarValor = undefined
  var retornarValor = function() {
    return 1;
  }
  return retornarValor()
  var retornarValor = function() {
    return 2;
  }
}

console.log(getValor());

function getValor2() {
  function retornarValor() {
    return 1
  }
  return retornarValor()
  function retornarValor() {
    return 2
  }
}

console.log(getValor2());
