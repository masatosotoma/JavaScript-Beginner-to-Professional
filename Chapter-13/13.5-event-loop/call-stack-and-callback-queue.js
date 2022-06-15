/*
call stack = where all the actions that it has to execute are queued up
The event loop is a process that is constantly monitoring this call stack, 
and whenever there are tasks to do, the event loop does them one by one. 
The tasks on top get executed first
*/

//example; No multithreading is going on here
console.log("Hi there");
add(4, 5);
function add(x, y) {
  return x + y;
}

console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 1000);
console.log(add2(4, 5));
function add2(x, y) {
  return x + y;
}
//The setTimeout() task gets outsourced to the browser's web API

/*When it's done, this appears in a special place: the *callback queue*
When the call stack is empty,, the event loop will check the callback queue for work to do.
If there are any callbacks waiting, they'll be executed, one by one
After every action, the event loop will check the call stack for work first

When setTimeout() expires, the event loop will have done whatever was on the callstack already, 
and will check the callback queue and execute any tasks on there:
*/

//Another example
console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 0); //set time 0
console.log(add3(4, 5));
function add3(x, y) {
  return x + y;
}

/*This will output the exact same thing. setTimeout() will also be outsourced when the timer is at 0.
The callback is placed in the callback queue right away, 
but the event loop won't even check the callback queue until the callstack is empty. 
So it will still print Sorry I'm late after 9, even though the timer is at 0.
*/
