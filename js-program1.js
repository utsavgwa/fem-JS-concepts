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