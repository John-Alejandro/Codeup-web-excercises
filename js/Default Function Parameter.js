"use strict"
// JavaScript Tutorial

// Default parameters allow us to initialize functions with default values. A default is used when an argument is either omitted or undefined — meaning null is a valid value. A default parameter can be anything from a number to another function


function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'

// The default value of the message paramater in the say() function is 'Hi'.
//
//     In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.
//
// Arguments vs. Parameters
// Sometimes, you can use the term argument and parameter interchangeably. However, by definition, parameters are what you specify in the function declaration whereas the arguments are what you pass to the function.
//
// Consider the following add() function:

function add(x, y) {
    return x + y;
}

add(100,200);


// In this example, the x and y are the parameters of the add() function, and the values passed to the add() function 100 and 200 are the arguments.
//
//     Setting JavaScript default parameters for a function
// In JavaScript, a parameter has a default value of undefined. It means that if you don’t pass the arguments into the function, its parameters will have the default values of undefined.
//
//     See the following example:

    function say(message) {
        console.log(message);
    }

say(); // undefined


// The say() function takes the message parameter. Because we didn’t pass any argument into the say() function, the value of the message parameter is undefined.
//
//     Suppose that you want to give the message parameter a default value 10.
//
// A typical way for achieving this is to test parameter value and assign a default value if it is undefined using a ternary operator:

    function say(message) {
        message = typeof message !== 'undefined' ? message : 'Hi';
        console.log(message);
    }
say(); // 'Hi'


// In this example, we didn’t pass any value into the say() function. Therefore, the default value of the message argument is undefined. Inside the function, we reassigned the message variable the Hi string.
//
//     ES6 provides you with an easier way to set the default values for the function parameters like this:

// function fn(param1=default1, param2=default2,..) {
// }


// In the syntax above, you use the assignment operator (=) and the default value after the parameter name to set a default value for that parameter. For example:

    function say(message='Hi') {
        console.log(message);
    }

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'


// How it works.
//
//     In the first function call, we didn’t pass any argument into the say() function, therefore message parameter took the default value 'Hi'.
//     In the second function call, we passed the undefined into the say() function, hence the message parameter also took the default value 'Hi'.
//     In the third function call, we passed the 'Hello' string into the say() function, therefore message parameter took the string 'Hello' as the default value.


console.log("Multiply");
//a & b value set in function call
function multiply(a, b) {
    return a * b
}

console.log(multiply(5, 2));  // 10
console.log(multiply(5));     // Returns NaN ! because b is not defined

console.log("<-------------->");
console.log("Multiply1");

//Before e6
//we could use ternary to set b=value
//a defined in function while b is set in function body
function multiply1(a, b) {
    b = (typeof b !== 'undefined') ?  b : 1
    return a * b
}

console.log(multiply1(5, 2));
// 10
console.log(multiply1(5));     // 5


console.log("<-------------->");
console.log("Multiply2");

//Using e6
// we can now define in function head

function multiply2(a, b = 1) {
    return a * b
}

console.log(multiply2(5, 2));          // 10
console.log(multiply2(5));            // 5
console.log(multiply2(5, undefined));  // 5
console.log(multiply2(5, "")); // returns 0 because "" is falsy value
console.log(multiply2(5, NaN));

