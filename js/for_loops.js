console.log("Yup, \"fruit\" for_loops.js is up and running.")
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
function showMultiplicationTable(x) {
    for ( var i = 1; i <= 10; i++) {
        console.log( x + " x " + i + " = " + i*x)  ;
    }
}
showMultiplicationTable(7)

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:



    var random = Math.floor((Math.random() * 3) + 1);
var i = random;
function oddEvenRandomNumber() {
    for ( var i = 19; i <200; i++) {
        if ( i % 3 === 0)
        console.log(i + " is odd.");
        else if (i % 2 === 0)
        console.log(i + " is even.");
    }
}



oddEvenRandomNumber()
// Create a for loop that uses console.log to create the output shown below.
function numberPyramid() {
    for ( var i = 1; i <= 9; i++) {
        var number = "";
        for ( var j =1; j <= i; j++) {
            number = number + i.toString()
        }
        console.log(number);

    }
}

numberPyramid()
// Create a for loop that uses console.log to create the output shown below.
function countDown() {
    for (var i = 100; i >= 5; i=i-5 )
        console.log (i)
}

countDown()