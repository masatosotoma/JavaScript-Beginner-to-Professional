/* 
filter() = to alter which values are in the array.
to take a function as an argument, and this function should return a Boolean.
If the Boolean has the value true, the element will end up in the filtered array.
If the Boolean has the value false, the element will be left out.
*/

//example
let arr = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element,index){
    return typeof element === "string";
}

let filterArr = arr.filter(checkString); 

console.log(filterArr);

// It is important to realize that the original array has not changed, 
// the filter() method returns a new array with the elements that made it through the filter.