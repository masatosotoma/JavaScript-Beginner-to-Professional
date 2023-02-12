//Create a file with the extension JSON name it people.json.
let url = "people.json"


fetch(url)
.then((response) => response.json())
.then((data)=>{
    data.forEach((person) => {
        
    });
});

/*Within people.json create an array that contains multiple objects. 
Each item in the array should be an object that has the same structure, 
using first, last, and topic as the property names
Make sure you use double quotes around the property names and values as this is the proper JSON syntax.*/
[
    {
        first:"Masato",
        last:"Sotoma",
        topic:"travel"
    },
    {
        first:"Zhang",
        last:"Claire",
        topic:"insurance"
    },
    {
        first:"Rankine",
        last:"Xuen",
        topic:"marketing"
    }

]