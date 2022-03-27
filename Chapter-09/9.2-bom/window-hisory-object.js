/* The window browser object also contains a history object
history object = to be be written without the prefix of window because it has been made globally available
so we can get the exact same object by using the commands below
*/

console.dir(window.history);
console.dir(history);

// This history object is what you can use to go back to a previous page to use built-in function

window.history.go(-1); // the web pabge goes back to the previous web page
