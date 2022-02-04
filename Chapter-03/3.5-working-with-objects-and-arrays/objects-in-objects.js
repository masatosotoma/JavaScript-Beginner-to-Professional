// Objects can go deeper not only one, but two or three

let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    State: "Florida",
  },
  yearOfEstablishment: 2021,
};

//To access or modify one of the properties of the address here, we can use two approaches:
company.address.zipcode = "33117"; // to update the Company's address' zipcode to the new numbers divided by comma
company["address"]["number"] = "100"; // to update the address's number to the new number devided by square brackets
