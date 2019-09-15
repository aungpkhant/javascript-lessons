// 1) Variable Definition- var, let, const
/* 
const, we must initialize with value 
when we define the variable
*/

const name = 'Derrick'
const age = 30;

// const my_age;
// my_age = 3;     // error 

// 2) Javascript datatypes
// String, numbers, boolean, null, undefined

const example_string = 'the string';
const number = 3;
const number2 = 4.5;
const isBool = false;
const x = null;
const y = undefined;
let z; // implicitly undefined

console.log(typeof name)

// 3) Template String

console.log(`My name is ${name} and I am ${age} years old`)

// 4) String Properties

// length, to UpperCase, etc.
console.log(`${name} is ${name.length} letters`)

// split string to an array
console.log(name.split(''))     // empty quotes - split by letters
