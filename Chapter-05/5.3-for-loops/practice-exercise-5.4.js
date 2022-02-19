// To create a table generator

let myTable = []; // to create an empty array

let rows = 5; // to set a number of rows
let columns = 10; // to set a number of columns

let counter = 0;

for (i = 0; i <= rows; i++) { // to creating rows with for loops
  let tempTable = [];
  for (let x = 0; x <= columns; x++) { // to create columns with nested for loops
    counter++; // adding numbers of the tables
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.table(myTable);
