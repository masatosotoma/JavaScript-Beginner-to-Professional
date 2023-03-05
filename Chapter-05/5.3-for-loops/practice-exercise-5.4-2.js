// 1. To create a table generator, first create an empty array, myTable, to hold your table data.
let myTable = [];

/*2. Set variable values for the number of rows and columns.
 This will allow us to dynamically control how many rows and columns we want within the table. 
 Separating the values from the main code helps make updates to the dimensions easier.*/

let rows = 6;
let columns = 4;

/*3. Set up a counter variable with an initial value of 0. 
 The counter will be used to set the content and count the values of the cells within the table.*/

let counter = 0;

/*4. Create a for loop with conditions to set the number of iterations, 
 and to construct each row of the table. 
 Within it, set up a new temporary array (tempTable) to hold each row of data. 
 The columns will be nested within the rows, generating each cell needed for the column. */

/*6. Increment the main counter each iteration of the inner loop, 
 so that we track a master count of each one of the cells and how many cells are created.*/

/*Push the counter values to the temporary array, tempTable. 
Since the array is a nested array representing a table, 
the values of the counter can also be used to illustrate the cell values next to each other in the table. Although these are separate arrays representing new rows, 
the value of the counter will help illustrate the overall sequence of cells in the final table. */

for (let i = 0; i < rows; i++) {
  let tempTable = [];
  /*Nest a second loop within the first to count the columns. 
  Columns are run within the row loop so that we have a uniform number of columns within the table.*/

  for (let x = 0; x < columns; x++) {
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.table(myTable);
