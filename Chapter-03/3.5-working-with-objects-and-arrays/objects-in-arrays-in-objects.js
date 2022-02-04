// You can even go more levels for mixed of objects and arrays
// Here is the objects has several properties and some properties have arrays by themseves

company = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: [
    {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida",
    },
    {
      street: "1st West avenue",
      number: "5",
      zipcode: "75001",
      city: "Addison",
      state: "Texas",
    },
  ],
  yearOfEstablishment: 2021,
};

// To access to the value of the properties in arrays of objects dividing by dot
let streetName = company.address[1].zipcode;
console.log(streetName);
