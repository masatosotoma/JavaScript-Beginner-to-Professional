// 1. Set up a string variable to use as output.
let output = "";

// 2. Select a number to skip, and set that number as a variable.
let skipNum = 4;

// 3. Create a for loop that counts to 10.
let counter = 0;
for (let i = 0; i <= 10; i++) {
  counter++;
  /* 4. Add a condition to check if the value of the looped 
variable is equal to the number that should be skipped.*/
  if (counter == skipNum) {
    // 5. If the number is to be skipped in the condition, continue to the next number.
    continue;
  }
  // 6. As you iterate through the values, append the new count value to the end of the main output variable.
  output += i;
}
// 7. Output the main variable after the loop completes.
console.log(output);

/*8. Reuse the code, but change the continue to break and see the difference. 
It should now stop at the skip value.*/
