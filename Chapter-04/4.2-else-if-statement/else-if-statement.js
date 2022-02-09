// If else template below
/*If *a value falls into a certain category*, then *a certain action will happen*, else if *the
value falls into a different category than the previous statement*, then *a certain action will
happen*, else if *the value falls into a different category than either of the previous brackets*,
then *a certain action will happen* 
*/

let age = 10;
let cost = 0;
let message;
if (age < 3) {
  cost = 0;
  message = "Access is free under three";
} else if (age >= 3 && age < 12) {
  cost = 5;
  message = "With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
  cost = 10;
  message = "A regular ticket costs 10 dollars";
} else {
  cost = 7;
  message = "A ticket is 7 dollars";
}

console.log(message);
console.log("Your Total cost " + cost);

//Since the value of age is 10, it will execute the second else if statement

// Other example below. It will execute as soon as a true is matched and others are ignored.

if (age < 3) {
  console.log("Access is free under three");
} else if (age < 12) {
  console.log("With the child discount, the fee is 5 dollars");
} else if (age < 65) {
  console.log("A regular ticket costs 10 dollars");
} else if (age >= 65) {
  console.log("A ticket is 7 dollars");
}
