/* for loops syntax below

for (initialize variable; condition; statement) {
 // code to be executed
}

The flow of a for loop

1. Initialize the variables.
2. Check the condition.
3. If the condition is true, execute the code block. If the condition is false, the loop will end here.
4. Perform the statement (the third part, for example, i++).
5. Go back to step 2.

*/

//example
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// You can also use a for loop to create a sequence and add values to an array
let arr = []; //to create an empty array

for (let i = 0; i < 100; i++) {
  arr.push(i); // to add numbers to the array
}
console.log(arr); // there are 0-100 in the array

// You can create an array containing only even values

let arr2 = []; //to create an empty array
for (x = 0; x < 100; x = x + 2) {
  arr2.push(x);
}
console.log(arr2);
