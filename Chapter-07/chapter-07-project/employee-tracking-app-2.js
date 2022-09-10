//Use first names, last names, and the number of years worked as values in the constructor

class employee {
  constructor(firstName, lastName, years) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.years = years;
  }
}

/*
Create two or more people with values for their first names, last names, 
and the number of years they've worked at the company. Add the people into an array.
*/

let sam = new employee("Sam","Smith",10);
let alice = new employee("Alice","Owen",7);
