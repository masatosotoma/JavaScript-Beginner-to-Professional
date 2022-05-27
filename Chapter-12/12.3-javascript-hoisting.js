/*
Hoisting = the principle of moving declarations of variables to the top of the scope in which they are defined
*/

var x;
x = 5;
console.log(x);

//This will log 5, but because of hosting, it's the same in the below too

var y;
y = 5;
console.log(y); // this will log 5 too.
//If you use let keyword, it will get a reference error

/*the JavaScript interpreter moves all the var
declarations to the top of the file before processing the file. Only the declarations, not
the initializations. This is why you get a result of undefined if you use it before having initialized it*/