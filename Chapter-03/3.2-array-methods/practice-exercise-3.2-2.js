// 1. Create an empty array to use as a shopping list.

let shoppingList = [];

// 2. Add Milk, Bread, and Apples to your list.
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

// 3. Update "Bread" with Bananas and Eggs.
shoppingList.splice(1,1,"Bananas","Eggs")

// 4. Remove the last item from the array and output it into the console.
shoppingList.pop();

// 5. Sort the list alphabetically.
shoppingList.sort();
console.log(shoppingList);

// 6. Find and output the index value of Milk.
console.log(shoppingList.indexOf("Milk"));

// 7. After Bananas, add Carrots and Lettuce.
shoppingList.push("Carrots");
shoppingList.push("Lettuce");
console.log(shoppingList);

// 8. Create a new list containing Juice and Pop.
let newList = ["Juice","Pop"];

// 9. Combine both lists, adding the new list twice to the end of the first list.
let concatArr1 = shoppingList.concat(newList);
let concatArr2 = newList.concat(concatArr1)

console.log(concatArr2);

// 10. Get the last index value of Pop and output it to the console.
console.log(concatArr2.lastIndexOf("pop"));