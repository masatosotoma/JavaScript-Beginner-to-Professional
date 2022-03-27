/* 
location object =  One of the properties of window that contains the URL of the current web page
 If you override (parts of) that property, you force the browser to go to a new page.
 To check the location object, use the command below
*/

console.dir(window.location);
console.dir(location);

/*
The location object consists of a few properties. 
You can access the nested objects and properties using dot notation
*/
location.ancestorOrigins.length;// ancestorOrigins is one of the objects in the location


