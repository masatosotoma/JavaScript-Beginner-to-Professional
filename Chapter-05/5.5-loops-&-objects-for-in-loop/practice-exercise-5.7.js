// to experiment with looping over objects and internal arrays

// to create a objetc with 3 items
let newGame = {
  console: "PS5",
  genre: "RPG",
  price: 59,
};

// Using for in loop, get the properties'names and values from the object and output
for (let prop in newGame) {
  console.log("Property names: " + prop + " Values: " + newGame[prop]);
}

// Using an array and for in loop, output the properties'name and values into consoule
let newArry = [{ console: "PS5", genre: "RPG", price: 59 }];
for (let prop1 in newArry) {
  console.log(newArry[prop1]);
}
