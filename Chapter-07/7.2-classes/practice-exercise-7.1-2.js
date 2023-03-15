// 1. Create a class for Person including the constructor for firstname and lastname.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// 2. Create a variable and assign a value of the new Person object using your friend's first and last names.
let friend = new Person("Claire", "Zhang");

// 3. Now add a second variable with another friend's name using their first name and last name.
let friend2 = new Person("Rankine", "Xuen");

// 4. Output both friends into the console with a greeting of hello.
console.log("Hello, " + friend.firstName + " " + friend.lastName + "!");
console.log("Hello, " + friend2.firstName + " " + friend2.lastName + "!");
