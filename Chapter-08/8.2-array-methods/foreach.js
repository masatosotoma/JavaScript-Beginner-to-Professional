// foreach() = takes the function that needs to be executed for every element as input

//example

let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(element,index){
    console.log("Printing stuff:", element, "on array position:", index);
}

arr.forEach(printStuff);

// you need to specify what function needs to be executed for every element