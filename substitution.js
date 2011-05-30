var foo = "foo";
var bar = "bar";

console.log(foo);        // -> "foo"
(function(foo){
  console.log(foo);    // -> "bar"
})(bar);
