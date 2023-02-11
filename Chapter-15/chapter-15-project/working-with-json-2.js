//Create a file with the extension JSON name it people.json.
let url = "people.json"

/*Within people.json create an array that contains multiple objects. 
Each item in the array should be an object that has the same structure, 
using first, last, and topic as the property names*/

fetch(url)
.then((response) => response.json())
.then((data)=>{
    data.forEach((person) => {
        
    });
})