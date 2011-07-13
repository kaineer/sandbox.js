var $f = function(verb) {
  console.log(verb +", "  + this.name); // this == {name: "World"}
}

var $g = function() {
  $f.apply({name: "World"}, arguments); // arguments == ["Hello"]
}

$g("Hello"); // -> Hello, World
