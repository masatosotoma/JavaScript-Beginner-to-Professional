// You can add arrays in objects. You can simply use an array with the square braces after the property

let company = {
  companyName: "Healthy Candy",
  activities: [  // an array for many kinds of activities
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};

// If you want to access to the second value of the array "activities"

let activity = company.activities[1]; // to create an variable to assign the 2nd value of the array
console.log(activity);