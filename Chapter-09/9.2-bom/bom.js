/*

BOM =  Browser Object Model, also called the window browser object.
the window object contains all the properties required to represent the window of the browser
- size of the window   - history of previously visited web pages

The window has global variables and functions, and these can all be seen when we explore the window object
The exact implementation of the BOM depends on the browser and the version of the browser

Some of the most important objects of the BOM
- History  - Navigator  - Location
*/

//Press F12 to inspect and go to console(next to the element tab), then type the command
console.dir(window) // to method shows a list of all the properties of the specified object

window.history.length; // Accessing the history object of the window and then the length of the history object
