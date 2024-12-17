// defining a function

function gretting() {
  console.log('Hello!');
}

function getPiValue() {
  return 3.14;
}
// calling a function
const a = 5;
const b = 6;
console.log(sum(a, b));

function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}

gretting();

const pi = getPiValue();
console.log(pi);

// Write a function that takes number as the argument and prints multiplication table
// Call that function to print multiplication table of 5, 28, 985, 6547854

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * 1}`);
  }
}
multiplicationTable(5);
multiplicationTable(28);
multiplicationTable(985);
multiplicationTable(6547854);

// Passing argumets
// Pass by value ()

function greetingInEnglish(name) {
  name = 'Donald';
  return `Hello ${name}!`;
}

let name = 'Alex';
console.log(greetingInEnglish(name));
console.log(name);

function printNumOfDays(days) {
  days.push('Wednesday');
  for (const day of days) {
    console.log(day);
  }
}

const days = ['Sunday', 'Monday', 'Tuesday'];
printNumOfDays([...days]);
console.log(days);

// Anonymous function

// callback function - if you pass function as an argument it is called callback function
function doSomething(callback) {
  callback();
}
doSomething(function () {
  console.log("It's done!");
});

//

function doFirstThing(callback) {
  console.log('This is doing first thing!');
  callback();
}

doFirstThing(function () {
  console.log('This is doing second thing!');
});

// Conditionally defining a function using an expression / function experession

let water = false;
function getThere(distance) {
  let estimatedTripDuration = 0;
  if (water === true) {
    const getSwimTime = () => {
      return distance / 2;
    };
    estimatedTripDuration = getSwimTime();
  } else {
    const getWalkTime = () => {
      return distance / 4;
    };
    estimatedTripDuration = getWalkTime();
  }
  return estimatedTripDuration;
}

const distance = 10;
console.log(`It will take ${getThere(distance)} hours to get there;`);

// Arrow function
const doubleArra = [1, 2, 3, 4].map((item) => item * 2);
console.log(doubleArra);
