// Arrays can contain objects just like objects can include arrays
//the arrays can be recognized by the square brackets and the objects by the curly brackets

let addresses = [
  {
    // first object
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  {
    // second object
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas",
  },
];

// To access to the "street" property of the first object. Create the variable to access the property
let streetName = addresses[0].street;
console.log(streetName);
