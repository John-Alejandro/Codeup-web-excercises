console.log("Break_and_Continue.js is in the \"House\".")

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.



function PickoddNumber() {
    var userInput;

    while (true) {
        userInput = prompt("Pick an odd number between 1 and 50?");

        if (userInput % 2 !== 0 && userInput > 0 && userInput < 51) {
            break;
        }
    }

    console.log("Number to skip is: " + userInput);

    for (var i = 1; i < 50; i += 2) {
        if (i == userInput) {
            var PickoddNumber = prompt("Whatever odd number you pick between 1 and 50. I will skip it.")
            console.log("Skipping your number, " + i);
            continue;

        }
        console.log("Here is an odd number: " + i);
    }
}