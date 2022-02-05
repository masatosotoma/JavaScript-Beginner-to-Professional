// create an array
companyCatalog = [];

// create 3 items, each item has properties(model,cost,quantity)
let item1 = { name: "Dell", model: "desktop", Cost: 1500, quantity: 20 };
let item2 = { name: "Asus", model: "laptop", Cost: 1000, quantity: 50 };
let item3 = { name: "Apple", model: "tablet", Cost: 800, quantity: 80 };

//Add all three objects to the main array using an array method and output the catalog
companyCatalog.push(item1, item2, item3);
console.log(companyCatalog);

// to output item3's quantity on console
console.log(companyCatalog[2].quantity);
