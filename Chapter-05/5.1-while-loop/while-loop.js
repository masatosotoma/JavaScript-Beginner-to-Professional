// while loop executes a certain block of code as long as expression evalueates to true
//here is the syntax of the while loop

/*
while (condition) {
  // code that gets executed as long as the condition is true
}
*/

//Example
let i = 0; // to create number 0 as a starting point number
// while loop that executes it as long as i is less than 10
while (i < 10) {
  console.log(i); // to log on to console the number
  i++; // then incremented by 1
} // do the same execution until the number gets to 9

// You can have a while loop that looks for a value in an array
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;

// both notFound and the length of array is begger than 0, while loops keeps executing
while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    // while doing the loop, if the array is equals to Luisa,
    console.log("Found her!"); // it will say Found her
    notFound = false; // and it will update notFound variable to false, which makes the loop false
  } else {
    someArray.shift(); // until the loop finds Louisa, it will do the else statement that delete the first element of the array
  }
}
//fibonacci sequence loop

let nr1 = 0;
let nr2 = 1;
let temp = (fibonacciArray = []);

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}
