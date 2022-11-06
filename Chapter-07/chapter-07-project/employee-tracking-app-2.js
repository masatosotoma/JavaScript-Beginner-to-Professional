//Use first names, last names, and the number of years worked as values in the constructor

class employee {
  constructor(firstName, lastName, years) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.years = years;
  }
  //Set up a prototype to return the details of the person's first and last names and how long they've worked at the company
  introduce() {
    console.log(
      "My name is " +
        this.firstName +
        " " +
        this.lastName +
        ". I worked here for " +
        this.years +
        " years."
    );
  }
}

/*
Create two or more people with values for their first names, last names, 
and the number of years they've worked at the company. Add the people into an array.
*/

let sam = new employee("Sam", "Smith", 10);
let alice = new employee("Alice", "Owen", 7);

let employeeList = [];
employeeList.push(sam, alice);

for (i = 0; i < employeeList.length; i++) {
  console.log(
    "First: " +
      employeeList[i].firstName +
      " Last: " +
      employeeList[i].lastName +
      " Years: " +
      employeeList[i].years
  );

  employeeList[i].introduce();
}

employeeList.forEach((employee) => {
  console.log(
    "First: " +
      employee.firstName +
      " Last: " +
      employee.lastName +
      " Years: " +
      employee.years
  );
  employee.introduce();
});
