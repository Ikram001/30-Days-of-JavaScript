
// In JavaScript, there are two main ways to declare a function. One of which is to use the function keyword.
// Basic Syntax
// The syntax is:


function add(a, b){
    let sum = 0;
    sum = a + b;
    return sum;
};

console.log(add(4,6));
/*
In this example, add is the name of the function.
 (a, b) are the arguments. You can write any logic in the body and finally return a result.
 You are allowed to return nothing, and it will instead implicitly return undefined.
*/

// Anonymous Function
// You can optionally exclude the name of the function after the function keyword.

var mult = function(a, b){
    mult = 0;
    mult = a * b;
    return mult;
};

console.log(mult(5,5));

// Immediately Invoked Function Expression (IIFE)
// You can create a function and immediately execute it in Javascript.

const result = (function(a, b){
    const sum =  a + b;
    return sum;
}) (5,5);

console.log(result);

// Why would you write code like this?
//  It gives you the opportunity to encapsulate a variable within a new scope. For example,
//  another developer can immediately see that sum can't be used anywhere outside the function body.

// Functions Within Functions
// A powerful feature of JavaScript is you can actually create functions within other functions and even return them!

function createFunction (){
    function add (a, b){
        const sum = a + b;
        return sum;
    } 
    return add;
};

const addf = createFunction();
console.log(addf(10,5));

// In this example, createFunction() returns a new function. Then that function can be used as normal.

// Function Hoisting
// JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized.
//  You can only do this if you declare functions with the function syntax.

function functionCreate (){
    return add;
    function add (a, b){
        const sum = a + b;
        return sum;
    };
};
const fCreate = functionCreate();
console.log(fCreate(3, 4)); // 7
// In this example, the function is returned before it is initialized.
//  Although it is valid syntax,
//   it is sometimes considered bad practice as it can reduce readability.

// Closures
// An important topic in JavaScript is the concept of closures. When a function is created,
//  it has access to a reference to all the variables declared around it, also known as it's lexical environment.
//  The combination of the function and its enviroment is called a closure.
//   This is a powerful and often used feature of the language.

function createAdder (a){
    function add (b){
        const sum = a + b;
        return sum;
    } 
    return add;
}

const add2 = createAdder(112);
console.log(add2(1000.65));
// In this example, createAdder passes the first parameter a and the inner function has access to it.
//  This way, createAdder serves as a factory of new functions, with each returned function having different behavior.


// Arrow Syntax
// The other common way to declare functions is with arrow syntax. In fact, on many projects, it is the preferred syntax.

// Basic Syntax


const addPlusMultiply = (a, b, c) => {
    const sum = a + b * c
    return sum;
};

console.log(addPlusMultiply(11,11,10));

// In this example, addPlusMultiply is the name of the function. (a, b, c) are the arguments. You can write any logic in the body and finally return a result.
//  You are allowed to return nothing, and it will instead implicitly return undefined.

// Omit Return
// If you can write the code in a single line, you can omit the return keyword. This can result in very short code.

const addshort = (a, b) => a + b;
console.log(addshort(31, 4)); // 7

// Rest Arguments
// You can use rest syntax to access all the passed arguments as an array.
//  This isn't necessary for this problem, but it will be a critical concept for many problems.

function functionSpread (...args){
    const sum = args[0] + args[1] * args[2] ;
    return sum;
};

console.log(functionSpread(55,5, 5))

// Why
// It may not be immediately obvious why you would use this
//  syntax because you can always just pass an array and get the same result.

// The primary use-case is for creating generic factory functions that accept any
//  function as input and return a new version of the function with some specific modification.

// By the way, a function that accepts a function and/or returns
//  a function is called a higher-order function, and they are very common in JavaScript.

function log(inputFunction) {
    return function(...args) {
        console.log("Input", args);
        const result = inputFunction(...args);
        console.log("Output", result);
        return result;
    }
}
const zy = log((a, b) => a + b);
zy(1, 2); // Logs: Input [1, 2] Output 3


// DAY 1: PROBLEM 1:
// Method 1:
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};
// Method 2:
var createHelloWorld2 = function() {
    return (...args) => "Hello World";
};

// Method 3:
var createHelloWorld3 = function() {
    return (...args) => "Hello World";
};

console.log(createHelloWorld());
console.log(createHelloWorld2());
console.log(createHelloWorld3());