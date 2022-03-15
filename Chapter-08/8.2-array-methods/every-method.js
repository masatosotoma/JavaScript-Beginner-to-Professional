/* 
every() = to see whether something is true for all elements in the array
If that is the case, the every() method will return true, else it will return false
*/

let arr = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element,index){
    return typeof element === "string";
}

console.log(arr.every(checkString)); //This will log false, since not all elements are of type string in the array.