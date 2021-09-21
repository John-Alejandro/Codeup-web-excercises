var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

var rebeccaPurple = function () {
    // alert("Hello Quasar!");

    var listitems = document.getElementsByTagName("li");

    for (var i = 0; i < listitems.length; i++){
        listitems[i].style.backgroundColor = "rebeccapurple"
    }
}
button1.addEventListener("click", rebeccaPurple)


button2.addEventListener("click", function (){

    button1.removeEventListener("click", rebeccaPurple)

})