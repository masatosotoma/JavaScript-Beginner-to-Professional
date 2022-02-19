// To create a table generator

let myTable = []; // to create an empty array

let rows = 5; // to set a number of rows
let columns = 10; // to set a number of columns

let counter = 0;

for (i = 0; i <= rows; i++) {
  let tempTable = [];
  for (let x = 0; x <= columns; x++) {
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.table(myTable);
