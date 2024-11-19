let fullName = 'Alex lee';
fullName = 'Donald Lee';

const surName = 'Lee';

var firstName = 'Alex';

let firstNum = 101;
let secondNum = 102;
let sum = firstNum + secondNum;

// let num1 = prompt('Enter first number: ');
// let num2 = prompt('Enter second number: ');
// alert(`Sum of ${num1} and ${num2} is: ${parseInt(num1) + parseInt(num2)}`);

const famousQuote = `"You can only live once!"`;

const bio = `"Hi my name is Alex Lee! 
I am currently studying full-stack development at Skillup labs."`;

let nameLength = fullName.length;
console.log(fullName.charAt(fullName.length - 1));

console.log(firstName.concat(' ', surName));
console.log(fullName.indexOf('e'));
console.log(fullName.lastIndexOf('e'));
console.log(fullName.toUpperCase());
console.log(fullName.split(' '));
console.log(fullName.substring(0, fullName.indexOf(' ')));

const fullNameWithMiddleName = 'Alex Li Chen';
// print firstName
// print middleName
// if no middle name then don't print middleName
// print lastName

let message = 'Welcome to Javascript Class';
console.log(message);
console.log(message.replace('Javascript', 'Programming'));

const salary = 100000;
const dob = 2020;
const weight = 50.5;
const height = 165.5;

// number functions
// parseInt
// parseFloat

let tip = '20.50';
let tipPerStaff = parseFloat(tip) / 5;
console.log('tipPerStaff', typeof tipPerStaff, typeof tipPerStaff.toString());

let veryBigNumber = 215745458585245558524545n;
let veryBigInt = 215745458585245558524545;
console.log(veryBigNumber, veryBigInt);

// Boolean
let isMarried = true;
let isStudent = false;

console.log(3 > 20);
console.log('Alex' == 'alex');
console.log(0 !== '0');

console.log(!!'Nabin');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!100);

//  falsy values
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

console.log(!!parseInt(fullName));

// NaN (Not a number)
console.log(Math.sqrt(-1));
console.log('Cat' * 61);

// Undefined
let pet;
console.log(pet);

// null
let student = {};
console.log(student);

student = null;
console.log(student);

// Symbol data type

let symbol1 = Symbol('Skillup Labs');
let symbol2 = Symbol('Skillup Labs');
console.log(symbol1, typeof symbol2);
console.log(symbol1 === symbol2);

// Objects
const subject = {
  name: 'Intro to Javascript',
  into: 'Small intro to javascript programming language',
  price: 1000,
  instructor: 'Alex Lee',
};
console.log(subject, typeof subject);
subject.name = 'Intro to programming';
console.log(subject.into);

//Array
const fruits = ['Apple', 'Banana', 'Guava', 'Mango'];
console.log(fruits, typeof fruits, fruits[fruits.length - 1]);

fruits[0] = 'Taro';

console.log(fruits);

// Scope
// Global
// Module scope
// Function scope
// Block scope

// arthmetic operations
// + - * / %
let a = 101;
let b = 202;
let c = a + b;
let d = b - a;
let e = a * b;
let f = b / a;
let g = c / d;
let h = b % a;
let i = a + (b - (c * d) / (c % e));
let j = i++;

let k = i--;
let l = ++i;
let m = --i;
console.log({
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
});

// Unary operators
// ++, --

//Short Circuit
// &&
// ||
