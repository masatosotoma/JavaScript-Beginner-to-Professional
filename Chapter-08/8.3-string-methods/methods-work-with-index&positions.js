// indexOf() = return the index number of the first character of the substring

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);

// If the indexOf method can't find the string, it will return -1

/*
 Often you will write an if check to see whether it's -1 before dealing with the result.

exmaple:
if ([poem.indexOf("python") != -1){
    // do stuff
};

*/

// search() = method to search for a particular substring within a string

let searchStr = "When I asee my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

// This will log 17 because of the position of the string's index
// If it can't find it, it will return -1 just like indexOf method

let notFound = searchStr.search("JavaScript");
console.log(notFound);

// lastIndexOf() = it return the index where the argument string occurs last

let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re); // this will return 24 since the last time re appears in the poem.

// charAt() = to do reverse of indexOf,return the string character of the specified index number

let pos1 = poem.charAt(10);
console.log(pos1); // it will return r because r is located at index 10

// If you are asking for the position of an index that is out of the range of the string, 
// it will return an empty string like space
let pos2 = poem.charAt(1000);
console.log(pos2);
