console.log("Break_and_Continue.js is in the \"House\".")

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.


function PickoddNumber() {
    while(true) {
var PickoddNumber  = prompt("Pick an odd number between 1 and 50?");
    if ( PickoddNumber % 2 !== 1 && PickoddNumber <=  50 && PickoddNumber >= 1)
        alert("Please try again, you did not pick an odd number.");
            break;

        }
}


//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
