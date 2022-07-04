/*

Digital accessibility is of huge importance for visually impaired people or those unable to use a mouse

In order to use the internet with little or no vision, screen readers are in place.

This is a special piece of software that reads what is on the screen 
or converts it to braille using special devices connected to the computer. 
People that cannot use a mouse will often rely on speech to give the computer instructions.

WAI-ARIA  = technical specification of how to make the internet digitally accessible. 
Dynamic parts can be recognized if implemented correctly, and by adding semantics and metadata to the HTML, 
it's better useable for external tooling.

Semantics = one of the most important parts
If something should be clicked, it is best to make it a <button> element and not a <span>, 
for example. If it is a button, it is possible to navigate to it with the Tab key and click it using Enter.

It is also important to use labels and link text that is descriptive. 
If the link part is only Click here, that is not helpful. 
Something like Click here to sign up for the summer event is much better

*/

/*In order to make input fields accessible, you'll have to add a label element. 
This will make it easier for screen readers to pick up on what the input box is about. 
So this is generally bad practice:

<input type="text" id="address" />

Much better way:

<label for="address">Address:</label>
<input type="text" id="address" />
*/

/*
The alt attribute for images => 
If the screen reader encounters an image, it will read the alt description
Since there is clearly no way to know it's not important if you cannot see the image

<img src="umbrella.jpg" width="200" height="200" alt="rainbow colored umbrella" />
*/


