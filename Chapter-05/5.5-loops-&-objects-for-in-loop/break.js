/*
break keyword = it will stop the loop and move on to the conde below the loop
*/

// Exmaple

let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];

// using break in th switch statement

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 4) {
    break; // the loop hits 4, it will stop at the 4 and end the loop
  }
}

// You can also use break to stop looping through arrays

//below the loop breaks when it founds car of 2020 or more and color black
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 2020) {
    if (cars[i].color === "black") {
      console.log("I have found my new car:", cars[i]);
      break;
    }
  }
}
