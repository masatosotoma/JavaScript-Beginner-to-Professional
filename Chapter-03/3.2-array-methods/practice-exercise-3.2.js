shoppingList = []; // to create an empty array for a shopping list
shoppingList.push("milk", "bread", "appele"); // to add things to buy in the array
shoppingList.splice(1, 1, "bananas", "eggs"); // to update bread to bananas and eggs
shoppingList.pop(); // to delete the last element of the list
console.log(shoppingList);

shoppingList.sort(); // to sort the list alohabetically
console.log(shoppingList);

findIndexOfMilk = shoppingList.indexOf("milk"); // to find the index# of milk
console.log(findIndexOfMilk);

shoppingList.splice(1, 0, "carrots", "lettuce"); // to add 2 elements after banana
console.log(shoppingList);

shoppingList2 = ["juice", "pop"]; // to create a new array
combinedShippingList = shoppingList.concat(shoppingList2); // to create new array that concatinating 2 arrays
console.log(combinedShippingList.lastIndexOf("pop")); // to get the last index value of "pop"
console.log(combinedShippingList); // to display the entire array
