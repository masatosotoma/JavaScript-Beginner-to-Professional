//Create a JSON object and save it in a file called list.json.
[
  {
    name: "Learn JavaScript",
    status: true,
  },
  {
    name: "Try JSON",
    status: false,
  },
];

const url = "list.json";

//Using JavaScript, assign the filename and path to a variable named url
//Using fetch, make the request to the file URL. Return the results as JSON.

fetch(url)
  .then((rep) => rep.json())
  .then((data) => {
    //iterate through the data and output the results into the console of each item in the JSON file.
    data.forEach((el) => {
      console.log(`${el.name} = ${el.status}`);
    });
  });
