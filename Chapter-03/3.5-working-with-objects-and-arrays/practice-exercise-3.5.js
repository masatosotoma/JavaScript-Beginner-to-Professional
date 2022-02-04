// To create an n object named people that contains an empty array that is called friends
people = {
  friends: [],
};

//Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value
let friend1 = { firstName: "Takuya", lastName: "Kugai", ID: "001" };
let friend2 = { firstName: "Shunji", lastName: "Okuhara", ID: "002" };
let friend3 = { firstName: "Naoto", lastName: "Maeshiro", ID: "003" };

//Add the three friends to the friend array.
people.friends.push(friend1, friend2, friend3);

console.log(people);
