console.log("Yup, \"fruit\" for_loops.js is up and running.")

function showMultiplicationTable(x) {
    for ( var i = 1; i <= 10; i++) {
        console.log( x + " x " + i + " = " + i*x)  ;
    }
}showMultiplicationTable(7)
function oddEvenRandomNumber() {
    for ( var i = 19; i <200; i++) {
        if ( i % 3 === 0)
        console.log(i + " is odd.");
        else if (i % 2 === 0)
        console.log(i + " is even.");
    }
}
oddEvenRandomNumber()

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

function countDown() {
    for (var i = 100; i >= 5; i=i-5 )
        console.log (i)
}

// countDown()