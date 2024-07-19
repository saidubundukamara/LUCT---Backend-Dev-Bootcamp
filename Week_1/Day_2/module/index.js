// Importing specific functions from the 'calculate' module
const { add, sub, mul } = require('./calculate');

// Declaring variables a and b
let a = 10;
let b = 20;

// Performing addition and storing the result in sum
let sum = add(a, b);

// Performing subtraction and storing the result in sub1
let sub1 = sub(a, b);

// Performing multiplication and storing the result in mul1
let mul1 = mul(a, b);

// Printing the results to the console
console.log('sum: ', sum);
console.log('sub: ', sub1);
console.log('mul: ', mul1);