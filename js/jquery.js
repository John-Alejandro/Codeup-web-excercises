$(document).keyup(function(event){
    // console.log(event.keyCode);
    if (yourCodes.length < 11) {
        yourCodes.push(event.keyCode);
    } else {
        yourCodes.shift();
        yourCodes.push(event.keyCode);
    }
    var isEqual = true;
    console.log(yourCodes);
    for (var i = 0; i < secretCode.length; i++) {
        if (yourCodes[i] !== secretCode[i]){
            isEqual = false;
        }
    }
    console.log(isEqual)
    if (isEqual === true){
        console.log("test");
        alert("You have added 30 lives!, you lucky dog.")
    }
});

// Allow the user to enter the Konami Code: "↑ ↑ ↓ ↓ ← → ← → b a enter" (the return key)
// Find the matching sequence using the code above for each key in the Konami Code.
//     Don't worry about capital a or b just check for lowercase.


// After the correct Konami Code sequence is inputted, have the script alert the user: "You have added 30 lives! Other ideas:
var secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var yourCodes = [];

// need to work on creating an array to store keyup input
// use for loop to compare each key input
// if ( === secretCode) {
//     alert("You have added 30 lives!, you lucky dog.")
// }

// Change the background screen.
// if (keyup === secretCode) {
//     $("*").css("background-color", "red");
// }

//     Play a sound.
$("")


//     Be creative!
//     Happy Playing.