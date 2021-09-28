"use strict"
// $(document).ready(function () {
//     alert("The page has loaded!");
// });
//
// var yourMission = $("Missions").html(
// alert(yourMission);
// );
//
// $("sub-title2").ready(function () {
//     alert("If you choose to accept this mission, Good Luck.")     // message still displays with same id
// })
//
// $(".codeup").css("border","1px solid red");
// need to rework and complete this first exercises

$("#main-heading").click(function () {
   // alert("Mission accepted by you clicking");
   $(this).css("background-color", "red");
})

$("p").dblclick(function () {
    $("p").css("font-size", `18px`);
})

$("li").hover(
    function () {
        $(this).css("color", "red");
    },
    function () {
        $(this).css("color", "black");
    }
);


