
// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

function MultiplybyTwo () {
    var number = 1;

while (number < 65536)  {
    number *= 2;
    console.log(number);
    }

}


// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.


// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5

// The output should be similar to the following:

//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

var allCones = Math.floor(Math.random() * 20) + 20;
var purchasedCones = Math.floor(Math.random() * 40) + 1;

do {
    // purchasedCones = prompt("I have " + allCones + " cones. How many do you want?");
    if (allCones > purchasedCones) {
        console.log("I cannot sell you " + allCones + " cones. I only have " + purchasedCones + " left.");
    } else {
        (allCones < purchasedCones)
        console.log("Here are your " + purchasedCones + " cones.");
    }
}   while (allCones <= 0);
    console.log(" All done for the day. I sold out.");

