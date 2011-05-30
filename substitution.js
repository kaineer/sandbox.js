var foo = "foo";

console.log(foo); // -> "foo"
(function(foo){
  console.log(foo); // -> "bar"
})("bar");
