function func1() {}
console.log(func1());

function func2(a,b) {
  console.log(a,b);
}
func2(5,2);

const minhasFuncoes = [function(a,b) {
  return a+b
}, func1, func2]

console.log(minhasFuncoes[0](2,2));

function soma(a,b) {
  return function(c) {
    return a + b + c
  }
}

console.log(soma(2,2)(3))