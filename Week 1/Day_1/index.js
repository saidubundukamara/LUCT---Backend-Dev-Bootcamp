// Basic math operations: +, -, /, *, %

// Declaring two variables a and b
let a = 5;
let b = 10;

// Performing addition
let sum = a + b;

// Performing subtraction
let sub = a - b;

// Performing division
let div = a / b;

// Performing multiplication
let mul = a * b;

// Performing modulus operation
let mod = a % b;

// Printing the results to the console
console.log("Sum: ", sum);
console.log("Sub: ", sub);
console.log("Div: ", div);
console.log("Mul: ", mul);
console.log("Mod: ", mod);

// Demonstrating reassignment with let and const

let x = 10; // Declaring variable x with let
const z = 20; // Declaring constant z with const

x = 30; // Reassigning x
// z = 40; // This would cause an error because z is a constant

console.log("X: ", x);
// console.log("Z: ", z); // Uncommenting this will cause an error

// Demonstrating string variables

let str1 = "hello";
let str2 = 'world';

console.log(str1, str2);

// Function to add three numbers
function add(a, b, c) {
    console.log(a + b + c);
}

add(10, 20, 30); // Calling the add function with three arguments

// Function to multiply two numbers and return the result
function mul2(a, b) {
    return a * b;
}

let result1 = mul2(10, 20); // Calling the mul2 function and storing the result

console.log(result1 + 30); // Printing the result of mul2 plus 30

// if, else if, else conditions

let age = 0;

if (age == 10) {
    console.log("Hey, I'm a child");
} else if (age == 20) {
    console.log("Hey, I'm 20");
} else if (age == 30) {
    console.log("Hey, I'm 30");
} else {
    console.log("Age not found");
}

// Working with arrays

let programming_language = [10, "Hello", 5.6, true];

// Accessing elements of the array
let i = programming_language[0];
let u = programming_language[2];

console.log('i: ', i);
console.log('u: ', u);

// Comparing elements of the array
if (i >= u) {
    console.log("i is greater");
} else {
    console.log("u is greater");
}

console.log(programming_language[2]);

// Working with objects

let person = {
    name: "John",
    age: 30
};

// Accessing object properties
console.log("Name: ", person.name);
console.log("Age: ", person.age);
