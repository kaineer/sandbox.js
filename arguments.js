var $args = function() {
  console.log(arguments.length);
};

$args(1,2,3); // -> 3
$args(1,2);   // -> 2
