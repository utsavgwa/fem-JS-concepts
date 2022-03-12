// we use slash slash to comment things out in javaScript

/*const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
*/
 
//declared strings in jS
const myName = "tis the season";  
console.log(myName);

// declare strings using back tick
const firstName = "Brian";
const lastName = "Holt";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
//we can also do this with new template, introduced in 2015
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);	
console.log(sentenceWithTemplate);

//control flow in javaScript:

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}

// control flow for if else in javaScript

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty >= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}

// while loops in javaScript 
let friendsAtYourParty1 = 0;
while (friendsAtYourParty1 < 10) {
  friendsAtYourParty1 = friendsAtYourParty1 + 1;
}
console.log(friendsAtYourParty1);

// there are many ways to add/subtract or increment/decrement

let x=0;
x=x+1;
x+=1;
x++;
++x;
console.log(x);

//this variable is to break line 
let linebreak1 = '\n';

// for loops in javaScript
let friends = 0;
for (let i = 0; i <= 10; i++) {
  friends++;
}
console.log(friends);

// sample program to print string 'a' 50 times

const character='a';
const repeat = 50;
let answer= ``;
for (let i = 0; i <= repeat; i++) {
  answer+= character;
}
console.log(answer.length);
// this above program is like procedural programming, which is tedious work

//another sample program by using function (addTwo) which can be reused all over again, but this program is not necessary useful

function addTwo(number) {
  return number + 2;
}
const finalAnswer = addTwo(5);
console.log(finalAnswer);
console.log(addTwo(100));
console.log(linebreak1);

// another program example made via function

function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));
console.log(linebreak1);

//another function example with custom variable

const myHomeCity = "Salt Lake City";
const myHomeState = "Utah";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
console.log(linebreak1);

// use of scope in functions

function addFive(number) {
  const someVariable = "you can't see me outside this function";
  // this is inside scope
  console.log(someVariable);
  return number + 5;
}
addFive(10);
console.log(addFive(10));
console.log(linebreak1);

// this is not going to work, since it's outside scope
// console.log(someVariable);


// SOME BUILT IN FUNCTIONS IN javaScript:


const sentence2 = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentence2.toLowerCase());

const wep ="blah blahblah";
console.log(wep.toUpperCase());

// math object is full of different math methods

console.log(Math.round(5.1));

// string.substr(indexToStart, howManyCharactersToInclude) to return part of a string
const name1 = "Brian Holt";
console.log(name1.substr(6, 3));
console.log(linebreak1);

// objects in javaScript

const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  address: {            //<-- here created an object within an object
    street: "1234 Alley",
    apt: "123"
  }
};
console.log(person);
console.log(person.name);
console.log(person["name"]); // same as the line above; definitely prefer using the other one

console.log(person.address.apt);
console.log(linebreak1);

// example taking all of it together:
const person1 = {
  name: "Brian",
  ageRange: "25-35"
};
const person2 = {
  name: "Jack",
  ageRange: "65-75"
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you'll like Daft Punk your crazy millenial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);
console.log(linebreak1);

// Objects can even have their functions

const dog = {// here dog is an object
  name: "dog",
  speak() {   // speak is a method, a function, there is paranthesis at last
    console.log("woof woof");
  }
};

dog.speak();// called the function here
console.log(linebreak1);

// Objects can as well have nested objects inside of them

const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    city: "Seattle",
    state: "WA",  
    country: "USA"
  }
};

console.log(me);
console.log(me.location.city);
console.log(linebreak1);

// CONTEXT or suffice to say this keyword

const me2 = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA"
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  }
};
/*
better method is to pass these things as variables instead of relying on this keyword
function getAddress(person){
  
}
*/

console.log(me2.getAddress());
console.log(linebreak1);

// ARRAYS -> 
const daysOfTheWeek = [
  "Monday",// key is 0, getting that from order implicitly
  "Tuesday",// key is 1
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);
console.log(linebreak1);

// inbuilt property  in arrays

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length); // .length is a property
console.log(primeNumbers.join(" | "));// join is a function (" | ") this is what we give join function, its called delimeter
console.log(linebreak1);

//if I want to add an element to the array after I've created. Use push!
const courses = [
  { teacher: "Kyle Simpson", course: "JS Function Lite" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React v3" },
  { teacher: "Steve Kinney", course: "State Management" }
];

courses.push({ teacher: "Sean Larkinn", course: "Webpack" });
console.log(courses);
courses[2] = { teacher: "Brian Holt", course: "Did Change in Array" };
console.log(courses);
courses[2].course = "another way of changing object in array";//since courses[2] is an object
console.log(courses);
console.log(linebreak1);
const briansCourse = courses[2];
briansCourse.course= "yet changed the name again, another method";
console.log(courses[2]);
console.log(linebreak1);

// looping in array

const cities = [ // cities is an object here
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
  //const city = cities[i];
  //console.log(city.toUpperCase());
  console.log(cities[i].toUpperCase());

}
console.log(linebreak1);

// method 2 --> it is what a part of functional programming

cities.forEach(function(city) {//forEach function builtin into arrays
  console.log(city.toLowerCase());
});

console.log(linebreak1);

// NOW, we get to the DOM: