"use strict";

console.log("test");

// Create a new file named jquery_faq.html. Commit all changes to GitHub.
//
//     In a HTML structure, create a definition list containing 10 FAQs about national parks.
//
//     Add a class to all dd elements named invisible.
//
//     Create some CSS rules that sets elements with the invisible class to visibility: hidden;.
//
// Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements.
//


$("dd").addClass("invisible");

$(".invisible").css("visibility","hidden");

$("#clickForAnswers").click(function (e) {
    e.preventDefault();
    $("dd").toggleClass("invisible");
});

//     Bonus
//
// When any of the dt elements is clicked, the element that was clicked should be highlighted.

// $("dt").click(function () {
//     $(this).css({"background-color": "yellow", "width": "11%"})
// });


//     1. Open the file named jquery_faq.html for editing. Commit all changes to GitHub.
//      Completed
//     2. Under the FAQ, add 3 unordered lists like above. Each list should contain a national park name in an h3 element, and a ul of 4 facts about the park.
//      Completed
//     3. Create a button that, when clicked, makes the last li in each ul have a yellow background.
//
//     4. When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
//
//     5. When any list item is clicked, first li of the parent ul should have a font color of blue.
//
//     Bonus
//     Create 3 divs that each look like a picture frame. Each one should have a unique background image and a button underneath that swaps the image from the frame. Use the traversing functions of jQuery to accomplish this.
//
//     The rules are the following:
//
//     The left frame swaps to the right and takes the image from the frame in the center.
//     The center frame swaps randomly to either the left or right.
//     The right frame swaps to the left and takes the image from the frame in the center.

// $("#makeYellow").click(function () {
//     e.preventDefault();
//     $(this).each(function () {
//         $(this).children().last().css("background-color","yellow");
//     })
// })



