// const monthlyRent = 500;
// const yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);

const redSquare = document.querySelector('.red-square');//gave CSS selector to querySelector, and it gives the first instance of it on the page
redSquare.style.backgroundColor = 'limegreen';
// here we called a method on document. document is a globally available variable in the browser that you use to interact with the HTML and CSS.

// here querySelectorAll gives back an array of all elements, that have .js-target class
const elementsToChange = document.querySelectorAll('.js-target');
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}

// example using button and evenListener method
const button = document.querySelector('.event-button');// by querySelector we get hold of the button, and store in jsvariable button
button.addEventListener('click', function () {
  alert("Hey there!");
});

// another example using input tag
const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.p-to-copy-to');

input.addEventListener("keyup", function() {
  paragraph.innerText  = input.value;
});

// just one more example with change event
const input1 = document.querySelector('.color-input');
const paragraph1 = document.querySelector('.color-box');

input1.addEventListener("change", function() {
  paragraph1.style.backgroundColor  = input1.value;
});

// EVENT BUBBLING or EVENT DELEGATION:
// listening for a click on a parent container, if anyof te child button gets fired

document.querySelector('.button-container').addEventListener('click', function(event) {
  if (event.target.tagName==='BUTTON') { // tagName property returns the tag name of the element.
    //alert(`You clicked on button ${event.target.innerText}`);
    event.target.innerText = `You clicked on button ${event.target.innerText}`;
  }
  event.stopPropagation();
});

// Strings, booleans, objects, arrays, numbers, these are different types of types (lol).
// JavaScript is a language where you don't have to concern yourself a lot with types since it doesn't strictly enforce them (other languages do)

//TYPES in javaScript:

const num = 10;
const div = document.querySelector(".number-target"); // the div right above this block
console.log(num, typeof num); // this is a number here
div.innerText = num;
console.log(div.innerText, typeof div.innerText); // it's a string here


// Now we come to AJAX
// it has morphed and evolved and now it's the term that we use to represent what you do when a website requests more information from a server after the page has loaded.
// we use AJAX to request data from an API,
//but what we mean we say API in this context is it's a public server that will allow us to make AJAX calls and it will respond
//Most big websites will have some sort of public API, like Twitter for example


// .then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.

const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // expected output: "Success!"
});

