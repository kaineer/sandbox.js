var re = /(ab)c/;
var str = "zabcz";

console.log(str.match(re)[0]); // -> abc
console.log(str.match(re)[1]); // -> ab
