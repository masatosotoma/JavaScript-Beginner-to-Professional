/*We can change the understanding and forgiving behavior of JavaScript to some extent using strict mode.
You can switch on strict mode with the following command
in your code. This needs to be the first command of your code:
=  "use strict"
*/

//Example:
"use strict"; //If we enable strict mode, this will give an error
function sayHi() {
  greeting = "Hello";
  console.log(greeting);
}

sayHi();
//We forgot to declare greeting, so JavaScript did it for us by adding a greeting variable to the top level and it will log Hello

/*You can also use strict mode only in a particular function: 
simply add it to the top of the function and it gets enabled for that function only.*/

/*when using strict mode, there are fewer words that can be
used as names for your variables and functions because they are likely to become
reserved keywords in the future that JavaScript will need for its own language*/

/*a great way of getting used to using JavaScript in the setting of frameworks or even for writing TypeScript later*/

/*It is typically considered a good practice nowadays, 
so we would encourage you to use this in your own code when you have the chance*/