let multiTable = []; // to set a blank array for containing the final table
let value = 8; // to specify how many values you want to multiply with one another and show the results for

for (i = 0; i < value; i++) {
  // create outer loop to loop each row and a temp array to store the row values
  const tempArr = [];
  for (x = 0; x < value; x++) {
    // add an inner loop for colum values, and push it to multipled row and colums values to tempArr
    tempArr.push(i * x);
  }
  multiTable.push(tempArr); // to add the tempArr values to the multipled table
}

console.table(multiTable); // to show the table into the console
