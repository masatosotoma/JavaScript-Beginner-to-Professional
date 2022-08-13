const items = []; // Create an array to hold an inventory of store items

//Create three items, each having the properties of name, model, cost, and quantity.
let sonyTV = { name: "Bravia", model: 2021, cost: 3000, quantity: 50 };
let lgTV = { name: "LG UHD", model: 2020, cost: 1400, quantity: 70 };
let samsungTV = { name: "Smart TV", model: 2022, cost: 2800, quantity: 45 };

//Add all three objects to the main array using an array method, and then log the inventory array to the console
items.push(sonyTV, lgTV, samsungTV);
console.log(items);

//Console log sumsungTV's model
console.log(items[2].model);

//Change/update lgTV's quantity to 35
items[1].quantity = 35;
console.log(items[1].quantity);

//Add properties "size and 8K comaptible" to each object
items[0].size = "50 inch"
items[1].size = "45 inch"
items[2].size = "55 inch"

items[0].display8K = true;
items[1].display8K = false;
items[2].display8K = true;

console.log(items);