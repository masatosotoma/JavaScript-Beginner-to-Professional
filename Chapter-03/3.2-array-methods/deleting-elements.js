array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// pop method to delete the last element of an array
array8.pop();
console.log(array8);

// shift method to delete the first element of an array
array8.shift();
console.log(array8);

/* splice method is also used for deleting element. 
Specify the index from where we want to start deleting, and then the number of elements we want to delete.*/

array8.splice(1, 3); // values 3, 4, 5 are deleted
console.log(array8);

// delete operator to change a cirtain element to undefined

delete array8[0];
console.log(array8);
