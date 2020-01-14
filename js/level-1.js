/*
Programming foundations - Course assignment - Rune Færø - Level 1
*/

// Question 1
// Declaring a variable with a string value.
var firstName = "Rune"; // firstName = Key, "Rune" = string value.

// Question 2
// Declaring an object variable
var person = {
  name: "George", // Prop 1. name = key, "George" = value.
  origin: "England" // Prop 2. origin = key, "England" = value.
};

// Question 3
// Declaring a variable outOfStock and initialising it with a boolean value.
var outOfStock = true; // true = boolean value.
// Checking if outOfStock is true or false and outputting answer.
if (outOfStock === true) {
  console.log("Out of stock");
}
else {
  console.log("In stock");
}

// Question 4
// Decalaring and initialising an array of five numbers.
var fiveNumbersArray = [26, 5, 10, 20, 9];
// Looping trough the array and outputting each individual value.
for (var i = 0; i < fiveNumbersArray.length; i++) {
  console.log(fiveNumbersArray[i]);
}

// Question 5
// Creating a loop that counts from 15 to 25 and outputting the values inside the loop.
for (var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}

// Question 6
// Outputting only the value ot the counter variable if it´s equal to 20.
for (var counter2 = 15; counter2 <= 25; counter2++) {
  if (counter2 === 20) {
    console.log(counter2);
  }
}

// Question 7
// Declaring a variable with two objects with the same three properties and initialising the properties with different values.
var personInfo = [{
    name: "Kurt",  // Prop 1. = String value.
    single: true,  // Prop 2. = Boolean value.
    age: 19        // Prop 3. = Number value.
},

  {
    name: "Filip", // Prop 1. = String value.
    single: false, // Prop 2. = Boolean value.
    age: 37        // Prop 3. = Number value.
}];
// Looping through the array and outputting the number and boolean value.
for (var i = 0; i < personInfo.length; i++) {
    console.log(personInfo[i].age);
    console.log(personInfo[i].single);
}

// Question 8
// Creating a function called whatIDontLike, and adding one argument with the animal i would like to output togheter with the text.
function whatIDontLike(annoyingAnimal) {
  console.log("I don´t like " + annoyingAnimal);
}
var annoyingAnimal = "mosquitos";
// Calling the function
whatIDontLike(annoyingAnimal);

// Question 9
// Creating a function called subNumber, and adding two arguments a+b.
function subNumber(a, b) {
  console.log(a - b);
}
// Calling the function and substracting the second argument from the first.
subNumber(7000, 3000);

// Question 10
// Creating an empty array.
var users = [];
// Creating a function called addUser that accepts one argument (user) and adding it toe the array using .push
function addUser(user){
  users.push(user);
}
var user1 = {
  userName: "SuperRune",
  password: "frog123",
  name: "Rune",
  lastName: "Færø"
}
// Calling the function
addUser(user1);
console.log(users);
