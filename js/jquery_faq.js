"use strict";

console.log("test");

$("dd").addClass("invisible");

$(".invisible").css("visibility","hidden");

$("#clickForAnswers").click(function (e) {
    e.preventDefault();
    $("dd").toggleClass("invisible");
});

$("dt").click(function () {
    $(this).css({"background-color": "yellow", "width": "11%"})
});

$("frame").css("border", "3px solid brown");



