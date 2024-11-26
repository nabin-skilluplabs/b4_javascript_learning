// if..else statement
// if
// if..else
// if..else if ... else

let city = 'Melbourne';
let message;
const isSydneyOrBrisbane =
  city == 'Sydney' || city == 'Brisbane' || city === 'Melbourne';
if (isSydneyOrBrisbane) {
  message = 'Welcome to Australia!';
} else if (city == 'Perth') {
  message = 'Hmm, you are from Perth!';
} else if (city == 'Melbourne') {
  message = 'Hmm, you are from Melbourne!';
} else {
  message = "You don't seem to be from Sydney or Brisbane";
}

let mobile = '0420122548';
// if (mobile === 0420122548) {
//   console.log('Your mobile matches with us!');
// } else {
//   console.log('Your mobile does not match!');
// }

// (condition) ? statement_when_condition_is_true :  statement_when_condition_is_false
mobile === '0420122548'
  ? console.log('Your mobile matches with us!')
  : console.log('Your mobile does not match!');

let day = new Date();
const hour = day.getHours();
// const greetings = hour < 12 ? 'Good Morning' : 'Good Afternoon';

// let greetings;
// if (hour < 12) {
//   greetings = 'Good Morning';
// } else {
//   greetings = 'Good Afternoon';
// }

// Short Circuit
// &&  , ||
let greetings = hour < 12 && 'Good Morning';
// greetings = hour < 12 || 'Good Afternoon';

// && - TURE && <SOMETHING> -> <SOMETHING>
// && - FALSE && <SOMETHING> -> FALSE

// || - TRUE || <SOMETHING> -> TRUE
// || - FALSE || <SOMETHING> -> <SOMETHING>
const month = day.getMonth();
let monthName;
switch (month + 1) {
  case 1:
    monthName = 'January';
    break;
  case 2:
    monthName = 'February';
    break;
  case 11:
    monthName = 'November';
    break;
  default:
    monthName = 'Looks like it is not a valid month';
}

const element = document.getElementById('message');
element.innerHTML = monthName;

// Loops
// for
// for...in
// for...of
// do...while
// while

// for loop

for (let i = 100; i > 0; i--) {
  console.log(i);
}

// 2 * 1 = 2
// 2 * 2 = 4

for (let j = 2; j <= 9; j++) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${j} * ${i} = ${j * i}`);
  }
}

// Multiplication table from 2 to 9

// for ... in
// loop through the object
const student = {
  firstName: 'Alex',
  lastName: 'Lee',
  email: 'alex_lee@gmail.com',
  address: '10 Bridge Street, Granville',
};

for (let key in student) {
  console.log(`${key} value is : ${student[key]}`);
}

// for ... of
// loop through an array
let fruits = ['apple', 'banana', 'Guava', 'Mango', 'Coconut'];
for (let [index, item] of fruits.entries()) {
  console.log(`${index}: ${item}`);
}

// do...while
let i = 11;
do {
  console.log(i);
  i++;
} while (i <= 10);

// whle
let j = 1;
while (j <= 10) {
  console.log({ j });
  j++;
}

// break, continue

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log({ i });
}

let phoneNumber = '555-757-1212';
for (let digit of phoneNumber) {
  if (digit === '-') continue;
  console.log(digit);
}

let correctNumber = 7; // The number to guess
let userGuess;
let attempts = 0;

do {
  userGuess = parseInt(prompt("Guess a number between 1 and 10 (or enter 0 to quit):"), 10);
  
  // Check if the user wants to quit
  if (userGuess === 0) {
    console.log("You chose to quit the game. Goodbye!");
    break; // Exit the loop if the user enters 0
  }

  // Check for invalid input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    console.log("Invalid input. Please enter a number between 1 and 10.");
    continue; // Skip the rest of the loop and prompt again
  }

  attempts++; // Increment the attempt counter

  // Check if the guess is correct
  if (userGuess === correctNumber) {
    console.log(`Congratulations! You've guessed the correct number ${correctNumber} in ${attempts} attempts.`);
  } else {
    console.log("Wrong guess. Try again!");
  }

} while (true); // Infinite loop until break is called