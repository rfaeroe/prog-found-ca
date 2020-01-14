/*
Programming foundations - Course assignment - Rune Færø - Level 2
*/

// Question 1
// Outputting only even numbers
for (var counter = 15; counter <= 25; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}

// Question 2
// Declaring a function to the variable innerFunction, and calling the innerFunction trough outerFunction
var innerFunction = function() {
  console.log("I am a function");
}
function outerFunction(caller){
  caller();
}
outerFunction(innerFunction);
