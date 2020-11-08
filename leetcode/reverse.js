var reverse = function(x) {
    const isString = (x) => Object.prototype.toString.call(x) === "[object String]"
    x = isString(x) ? x : Number(x).toString()
    let palavraAoContrario = '';
    for (let i = x.length - 1; i >= 0; i--) {
        palavraAoContrario += x.charAt(i)
    }
    return palavraAoContrario
};

console.log(reverse("thiago"));
console.log(reverse(-123))