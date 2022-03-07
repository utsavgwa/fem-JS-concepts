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