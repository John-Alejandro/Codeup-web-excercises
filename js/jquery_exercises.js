"use strict"
$(document).ready(function () {
    alert("Your page has loaded.");
});

$("main-heading").ready(function () {
    var yourMission = $("#main-heading").html();
    alert(yourMission);
});

    $("sub-title2").ready(function () {
    alert("If you choose to accept this mission, Good Luck.")
});

$(".codeup").css("border","1px solid red");

$("li").css("font-size","20px");


// need to rework and complete this first exercises

// $("#main-heading").click(function () {
//    // alert("Mission accepted by you clicking");
//    $(this).css("background-color", "red");
// })
//
// $("p").dblclick(function () {
//     $("p").css("font-size", `18px`);
// })
//
// $("li").hover(
//     function () {
//         $(this).css("color", "red");
//     },
//     function () {
//         $(this).css("color", "black");
//     }
// );


