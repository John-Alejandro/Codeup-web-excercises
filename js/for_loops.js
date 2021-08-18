console.log("Yup, \"fruit\" for_loops.js is up and running.")

// function showMultiplicationTable(x) {
//     for ( var i = 1; i <= 10; i++) {
//         console.log( x + " x " + i + " = " + i*x)  ;
//     }
// }

function oddEvenRandomNumber() {
    for ( var i = 19; i <200; i++) {
        if ( i % 3 === 0)
        console.log(i + " is odd.");
        else if (i % 2 === 0)
        console.log(i + " is even.");
    }
}
// oddEvenRandomNumber()

function numberPyramid() {
    for ( var i = 1; i <= 9; i++) {
        console.log(i + i);

    }
}

// numberPyramid()

function countDown() {
    for (var i = 100; i >= 5; i-- )
        console.log (i)
}

// countDown()