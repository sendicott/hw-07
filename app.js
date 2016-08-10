console.log("The Tallest Mountain");

// Create an array that contains a bunch 
// of numbers representing the heights of 
// various mountains. Write some code that 
// identifies the height of the tallest of 
// the available mountains and prints it out.

let mountains = [3, 5, 2, 88, 44, 35, 21];
let biggest = 0;

for (let i = 0; i < mountains.length; i++) {
    if (mountains[i] > biggest) {
        biggest = mountains[i];
    }
}

console.log("Of the mountain heights: " + mountains)
console.log("The biggest mountain is " + biggest);

console.log("------------")
console.log("Hangman Lite");

// Create a variable called word that contains
// a hangman word, and create a second variable 
// called letter that indicates the letter that 
// the player guessed. Print out "Yeah, the letter 
// x exists y times in my word" if the letter 
// exists (but substitute the actual letter and 
// the number of times). If the letter doesn't 
// exist, print out "Nope, that letter doesn't 
// exist in my word."

let word = "hangmanword";
let letter = prompt("Guess a letter");
let count = 0;

// = means "is equal to" as a statement
// === means "is __ equal to __?" as a question

for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
        count = count + 1;
    }
}
if (count < 2) {
    console.log("Yeah, the letter " + letter + " exists " + count + " time in my word.")
} else {
    console.log("Yeah, the letter " + letter + " exists " + count + " times in my word.")
}

console.log("-------------");
console.log("Cherokee Hare");

let startingPopulation = prompt("Pray tell, how many hares of thy Cherokee population doth presently reside upon yonder hill?");
let birthRate = 0.5;
let numberOfWeeks = prompt("A silent figure sneaks up behind you while chatting with the refined gentleman and hits you with a club, knocking you down the hill. This is a very tall hill and it takes weeks to climb back up it to speak with the refined gentleman again. How many weeks did it take you?");

for (let i = 0; i < numberOfWeeks; i++) {
    startingPopulation = startingPopulation * (birthRate + 1);
}

console.log("Welcome back! There are now " + startingPopulation + " Cherokee hares residing upon this hill.");

console.log("--------------");
console.log("Change Machine");

let amount = prompt("Find the wallet closest to you that you do not own. Open it. Count how much paper money is inside. Discreetly return it and then enter that number into this prompt. Alternatively, pick a positive integer.");
let twenty = 0;
let ten = 0;
let five = 0;
let one = 0;
let myArray = [];

while (amount > 0) {
    if (amount > 20) {
        amount = amount - 20;
        twenty = twenty + 1;
    } else if (amount > 10) {
        amount = amount - 10;
        ten = ten + 1;
    } else if (amount > 5) {
        amount = amount - 5;
        five = five + 1;
    } else {
        amount = amount - 1;
        one = one + 1;
    }
}

myArray.push(twenty, ten, five, one);
console.log(myArray);

console.log("-------------------")
console.log("Finding Palindromes")

//Create a variable called word that stores a word we want 
// to test as a palindrome. Write some code that prints 
// out "true" if word is a palindrome, or "false" if its not.

let palinword = prompt("Enter a palindrome. Or don't");
let drownilap = [];

for (let i = palinword.length - 1; i >= 0; i--) {
    drownilap.push(palinword[i]);
}

drownilap.toString();

var test = drownilap.join('');

if (test === palinword) {
    console.log("true");
} else {
    console.log("false");
}

console.log("---------")
console.log("Hard Mode")

// Create a variable called count that keeps track of 
// the length of the desired array. Write some code 
// that generates the first count numbers in the 
// Fibonacci sequence.

let fib = [0, 1];
let nacci = 0;

for (let i = 2; i < 15; i++) {
    nacci = fib[i-1] + fib[i-2];
    fib.push(nacci);
}

console.log(fib);