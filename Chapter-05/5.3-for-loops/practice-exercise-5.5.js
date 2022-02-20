let gridArray = []; // to create a grid array variable
let cells = 64; // to set up the number of cells
let counter = 0; // to set up a counter
let rows; // to create a row array

//to create a loop that will itierate up to the # of cells, +1 to include the 0 value

for (let i = 0; i < cells + 1; i++) {
  if (counter % 8 == 0) {
    // modulo to check if the main counter is divisible by 8
    if (rows != undefined) {  // check if the row is undefined
      gridArray.push(rows); // if the row has been defined, add the row to the main grid array
    }
    rows = []; // check if the counter is devisible by 8 and it it is, clear the row array.
  }
  counter++; // increment the coutner by 1
  let temporary = counter; // to set up the temporary variable to hold the counter
  rows.push(temporary); // to add the temprary variable to the row array
}
console.table(gridArray); // to output the grid into the console
