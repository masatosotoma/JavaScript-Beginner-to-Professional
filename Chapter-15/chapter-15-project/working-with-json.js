let url = "people.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((person) => {
      console.log(`${person.first} ${person.last} - ${person.topic}`);
    });
  });
//Within people.json create an array that contains multiple objects

/* Each item in the array should be an object that has the same structure, 
    using first, last, and topic as the property names. 
    Make sure you use double quotes around the property names and values as this is the proper JSON syntax */

//Add three or more entries into the array using the same object structure for each item.
[
  {
    first: "Laurence",
    last: "Svekis",
    topic: "JavaScript",
  },
  {
    first: "John",
    last: "Smith",
    topic: "HTML",
  },
  {
    first: "Jane",
    last: "Doe",
    topic: "CSS",
  },
];
