/*
continue keyword = will stop the current iteration and move back to the top of the loop
*/

// Example

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

// to skip every car that is not black and not 2020 or later model
for (let car of cars) {
  if (car.color !== "black") {
    continue;
  }
  if (car.year >= 2020) {
    console.log("we could get this one:", car);
  }
}
