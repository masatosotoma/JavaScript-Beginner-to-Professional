let counter = 0; // to set the starting counter to 0;
let step = 10; // to set the step how much the counter increased by

// to do printing the counter to the console every loop and counter incremented by the step number at the same time
do {
  console.log(counter);
  counter += step;
} while (counter <= 100); // the loop keep executing until the number hits less than or equal to 100
