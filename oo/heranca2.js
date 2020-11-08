Object.prototype.attrD = 'D' /* nunca faça isso */
const avo = {
  attrA: 'A'
}
const pai = {
  __proto__: avo,
  attrB: 'B',
  attrC: 'C'
}
const filho = {
  __proto__: pai,
  attr: 'D'
}

console.log(pai.attrA, filho.attrB, filho.attrD);
console.log(filho.__proto__ === pai, pai.__proto__ === avo)
