// 1. Create a grid array variable.
let gridArr = [];

// 2. Set a value of 64 for the number of cells.
let cells = 64;
// 3. Set a counter to 0.
let counter = 0;

// 4. Create a global variable to be used for the row array.
let row;

/* 5. Create a loop that will iterate up to the number of cells you want in the array,
plus one to include the zero value. In our example, we would use 64+1.*/
for (let i = 0; i < cells+1; i++) {
  /* 6. Add an outer if statement, 
which uses modulo to check if the main counter is divisible by 8 or whatever number of columns you want.*/
  if (counter % 8 == 0) {
    /*7. Inside the preceding if statement, 
add another if statement to check if the row is undefined, 
indicating whether it is the first run or whether the row is complete. 
If the row has been defined, then add the row to the main grid array.*/
    if (row != undefined) {
      gridArr.push(row);
    }
    /*8. To finish off the outer if statement, 
    if the counter is divisible by 8, 
    clear the row array—it has already been added to the grid by the inner if statement.*/
    row = [];
    //At the end of the for loop, increment of the main counter by 1.
  }
  counter++;
  //Set up a temporary variable to hold the value of the counter and push it to the row array.
  let temp = counter;
  row.push(temp);
}
console.table(gridArr);
