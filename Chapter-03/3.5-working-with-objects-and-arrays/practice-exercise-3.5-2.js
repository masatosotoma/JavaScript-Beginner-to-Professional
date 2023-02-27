// 1. Create an object named people that contains an empty array that is called friends.
let people = {
  friends: [],
};
// 2. Create three variables, each containing an object,
//that contain one of your friend's first names, last names, and an ID value.
let claire = { first: "Claire", last: "Zhang", ID: 1 };
let rankine = { first: "Rankine", last: "Xuen", ID: 2 };
let ozan = { first: "Ozan", last: "Ocak", ID: 3 };

// 3. Add the three friends to the friend array.
people.friends.push(claire, rankine, ozan);

// 4. Output it to the console.
console.log(people.friends);
