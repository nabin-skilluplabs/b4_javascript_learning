// Array() Constructor
// Assigning array as a value

let daysOfAWeek = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Create an array using Array constructor to store 5 subjects
let subjectName = new Array('Math', 'Science', 'Computer', 'Biology', 'Social');

// Create an array using array literal to store your past 3 addresses
let pastAdresses = ['lidcombe', 'Auburn', 'Granville'];

const address = '10 Bridge Street, Granville 2142, NSW';
const addressArr = address.split(',');
let streetAddress = addressArr[0];
let surburb = addressArr[1];
let state = addressArr[2];

addressArr[1] = 'Merrylands 2160';

addressArr[3] = 'Australia';

// loop through addressArr and print all items
for (let item of addressArr) {
  console.log(item);
}

for (let i = 0; i < addressArr.length; i++) {
  console.log(addressArr[i]);
}

// Delete array elements
// Change the length of an array
addressArr.length = 3;

delete addressArr[2];

const value0 = numbers.push(10);
const value1 = numbers.pop();

const value2 = numbers.unshift(-1);
const value3 = numbers.shift();

// splice
const value4 = numbers.splice(5, 1);

// fullName = "Donald Lee Trump"
// Remove the middle name and return Donald Trump as final result

let fullName = 'Donald Lee Trump';
let fullNameArr = fullName.split(' ');
fullNameArr.splice(1, 1);
let updatedFullName = fullNameArr.join(' ');

let newNumbers = [101, 102, 103, 104, 105];
const combinedNumbers = numbers.concat(newNumbers);

const stringNumbers = combinedNumbers.toString();

const indexOf101 = combinedNumbers.indexOf(101);

// Callback function

const total = combinedNumbers.reduce(function (val1, val2) {
  return val1 + val2;
}, 0);

// map
// Return an array with capitalized first letter and other letters lowercase
let groceryList = ['apple', 'eGg', 'milk', 'ONion', 'GARLIC', 'orange'];
const mappedGroceryList = groceryList.map(function (item) {
  let firstLetter = item[0].toUpperCase();
  let restLetters = item.slice(1, item.length).toLowerCase();
  let capitalizedItem = firstLetter + restLetters;
  return capitalizedItem;
});

// filter
let groceryListStartingWithO = mappedGroceryList.filter(function (item) {
  if (item[0].toUpperCase() === 'O') {
    return true;
  }
  return false;
});

// Destructuring Arrays
const [, , newState] = addressArr;

// Spreading Arrays
// ...
const letters = ['a', 'e', 'i'];
let newLetters = ['o', ...letters, 'u'];

let [o, a, ...rest] = newLetters;

//
// Store these list in an Array and show them in html page as ordered list

// Access and modify array elements.
// Add or remove elements (using push(), pop(), shift(), unshift()).
// Iterate over an array (using for, forEach(), map(), etc.).
// Search for elements (using indexOf(), includes(), find()).
// Transform arrays (using sort(), filter(), map()).

const arrayFunctions = [
  'Access and modify array elements.',
  'Add or remove elements (using push(), pop(), shift(), unshift()).',
  'Iterate over an array (using for, forEach(), map(), etc.).',
  'Search for elements (using indexOf(), includes(), find()).',
  'Transform arrays (using sort(), filter(), map()).',
];

const arrayFunctionsWithli = arrayFunctions.map(function (item) {
  return '<li>' + item + '</li>';
});

const arrayFunctionsWithliString = arrayFunctionsWithli.join(' ');

const body = document.querySelector('body');
body.innerHTML = '<ol>' + arrayFunctionsWithliString + '</ol>';
