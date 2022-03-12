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