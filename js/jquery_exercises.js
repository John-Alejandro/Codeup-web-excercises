"use strict"
// $(document).ready(function () {
//     alert("Your page has loaded.");
// });
//
// $("main-heading").ready(function () {
//     var yourMission = $("#main-heading").html();
//     alert(yourMission);
// });
//
//     $("sub-title2").ready(function () {
//     alert("If you choose to accept this mission, Good Luck.")
// });

// $(".codeup").css("border","1px solid red");

$("*").css("background-color","#cccccc")

$(".codeup").css("border", "25px dashed red","padding","5em");

$(".codeup").css("padding","5em");


$("li").css("font-size","20px");

$("li").css("list-style-type","none");

$("li").css("background-color","coral");


$("p").css("background-color", "yellow");

$("h1").css("font-size", "80px");

$("h1").css("text-align","center");

$("h1").ready(function () {
    var MI6 = $("h1").html();
    alert(MI6);
})

// need to rework and complete this first exercises

$("#main-heading").click(function () {
   // alert("Mission accepted by you clicking");
   $(this).css("background-color", "red");
})
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


