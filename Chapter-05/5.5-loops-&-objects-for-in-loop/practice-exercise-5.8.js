let output = ""; // to create a string value for output
let skipNum = 8; // set the number that will be skipped

// create a for loop counting 10 that skips the numbe 8 using continue keyword
for (let i = 0; i < 10; i++) {
  if (i === skipNum) { // to make the loop skip the numbet set before
    continue;
  }
  output += i;
}
console.log(output);


// create a for loop counting 10 that ends the numbe 8 using break keyword
let output1 = ""; //
let skipNum1 = 8;

for (let i = 0; i < 10; i++) {
  if (i === skipNum) {
    break;
  }
  output += i;
}
console.log(output);
