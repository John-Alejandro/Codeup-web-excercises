//  VARIABLES   -  let var const  //////////////////////////

// let myName = "John";
// var iLike = "pizza";
// const  PI = 3.41;

// myName = "something else";
// iLike = "something else too";

// DATA TYPES ///////////////////////////////////////////////

// let string = "This is anormal string";
// let number = 42;
// let boolean = false;
// let array = [1,2,3,4,5, "a", "b", "c"];
// let _undefined = undefined;
// let _null = null;
// let NaN = Nan;

// let object = {
//     "keyname": "value"
// };

// string
// number
// boolean
// array[3] -> 4
// array[5] -> "a"
// object.keyname same as object ["keyname"]
// object["keyname"]

// function myAwesomeFunction(myString,myString2 = 0){     // Creating function and naming function with setup
//     // all your code
//     return function() {
//        console.log("hey I'm a function")
//     };
//     console.log(myString)
//     console.log(myString2)
// }

// let myResult = myAwesomeFunction("abc", "def");

// console.log(myResult());

// SCOPING ///////////////////////////////////////////////
//  Var is Global Scope - Inside and outside function {}
//  Let is Block Scope  - Inside function ONLY!

// var myVariable = 100;
// var myAge = 20;
// let Iwant ="pizza"
// console.log(iWant);

// if (myAge === 20) {
//     var iWant = "burger";
// }

// console.log(myVariable);
// console.log(myAge);
// console.log(iWant);

// function myFunction(){
//     var a = 100;
// }
// myFunction();
// console.log(a);

// Can make a block with var anywhere and it can be called and produce value ///////////
// {
//     var a = 100;
// }
// console.log(a);

// alert - prompt - confirm ///////////////////////
// alert - 'strings' and numbers show up fine , objects do not
// confirm - can be console.log and it will give you true or false
// let result = confirm( "Do you want me to erase this?");

// console.log(result);
// prompt
// let result = prompt("What is your name?");

// console.log(result);

// OBJECTS  ///////////////////////////////////////////////////////////////
// let obj = {
//     favsnack:"pizza"
// };
// console.log(obj.favsnack);

// obj.favsnack ="burger";

// console.log(obj.favsnack);

// console.log(obj);

// let person = {
//     name: "John",
//     channel: "Theman",
//     website: "Theman.com",
//     isHTMLaProgramingLanguage: true
// };

// console.log(person)
// //  delete removes keyvalue
// delete person.isHTMLaProgramingLanguage;

//  const protects "person" but does allow key values to be changed
// const person = {
//         name: "John",
//         channel: "Theman",
//         website: "Theman.com",
//         isHTMLaProgramingLanguage: true
//     };
//     person.name ="Something esle";

//     console.log(person)

// ARRAYS - SPECIAL VERSION OF OBJECTS ///////////////////////////////////////

// let arr = ["Hello","World"];

// arr[100] ="!!";
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);
// console.log(arr[0]);

// IF ELSE ///////////////////////////////////////////////////////////////////

// let myName = "John";
// // myName = "Something else";
// // myName = "Something";

// if (myName == "John") {
//     console.log("Well, the variable is still John.");
// } else  if (myName == "Something else") {
//     console.log("The value of the variable changed?");
// } else {
//     console.log("????");
// }

// SWITCH CASE //////////////////////////////////////////////////////////////

// let myAge = 20;

// switch (myAge) {
//     case 21:
//     case 31:
//     case 41:
//     case 51:
//         console.log("You are younger than 51");
//         break;
//     case 52:
//         console.log("You are 52");
//     default: 53;
//             console.log("You are neither 52 or 53");
// }
// MATH OPERATORS //////////////////////////////////////////////////////////

// let number1 = 100;
// let number2 = 200;
// console.log("Add: " , number1 + number2);
// console.log("Subtract: " , number1 - number2);
// console.log("Multiply: " , number1 * number2);
// console.log("Divide: " , number2 / number1);
// console.log("Exponetation: " , number1**2);
// console.log("Increment: " , ++number1);
// console.log("Decrement: " , --number1);

// INCREMENT AND DECREMENT ////////////////////////////////////////////////

// var myNumber = 42;

// var num1 = (++myNumber) + (myNumber++);
// 43 +  43 = 86

// var num1 = (myNumber++) + (++myNumber);
// 42 + 44 = 86

// var num2 = (--myNumber) + (myNumber--);
// 42 +  40 = 82

// var num2 = (myNumber--) + (--myNumber);
// 41 + 41 = 82

// console.log(num2);

// console.log(myNumber++);
// console.log(myNumber);

// console.log(++myNumber);
// console.log(myNumber);

// console.log(myNumber--);
// console.log(myNumber);

// console.log(--myNumber);
// console.log(myNumber);

// console.log(num1);

// OR  AND NOT ////////////////////////////////////////////////

// let myAge = 7;
// let myHeight = 6;

// let amIeligible = false;

// if (myAge > 10 && myAge < 20 || myHeight > 5.5) {
//     console.log("You are eligible for something");
//     amIeligible = true;
// }
//     if(!amIeligible){
//         console.log("I am not eligible");
//     }   else {
//         console.log("I am eligible");
//     }

// let myMagicVariable = "oakah" || 2 || 3;

// console.log(myMagicVariable);

// let myAge = 10;

// console.log(!!myAge)

//  for loop /////////////////////////////////////////////////

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log("---");
// console.log(i);

// Step 0 - i = 0
// Step 1 - Checking if i < 10 - true
// Step 2 - executing the block
// Step 3 - i++ = 1
// Step 4 - checking if < 10 - true
// Step 5 - executing the block
// ..
// ..
// ..
// StepX - i++ = 9
// x+1 - checking - true
// x+2 - executing
// x+3 i++ = 10
// x+4 - checking - false
// x+5 - get out of loop

// while loop /////////////////////////////////////////////////////////

// var i = 0;

// while(i < 100) {
//     console.log(i);
//     i++;
// }
// console.log("---");
// console.log(i);

// do-while-loop ////////////////////////////////////////////////

// var i = 0;

// do {
//     console.log("great");
//     i++;
// } while(i < 10);

// console.log(i);

// break continue return ///////////////////////////////////////

// for( i=0;i,10;i++) {
//     console.log(i);
//     if(i == 5) {
//         break;
//     }
// }

// for( i=0;i,10;i++) {
//     console.log(i);
//     if(i == 5) {
//         continue;
//     }
// }
// console.log(i);

// array.map ////////////////////////////////////////////////////
console.log("\u{1F600}")
// let array = [1,3,5,6]

// console.log(array.map((element) => {
//     return element/3;
// }))

//  array.filter  //////////////////////////////////////////////

// let array = [1,3,5,6]

// let newArray = array.filter(element => {
//     if(element > 2) return true;
//         return false;
// });

// console.log(newArray);

//   array.forEach  ////////////////////////////////////////////

// let array = ["John", "Fela","Liz", "Joanne"];

// for(let i=0;array.length;i++){
//     const element = array[i];
// }
// These two functions give same result
// array.forEach((element) => {
//     console.log(element);
// });

// array.reduce  ///////////////////////////////////////////////

// let array = [1,2,3,4,5,6,,7,8,9,10]; // -> 55

//  const res = array.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue;
// }, 0);

//  accumulator = 0 | currentValue = 1
//  accumulator = 1| currentValue = 2
//  accumulator = 3 | currentValue = 3
//  .....
//  .. 45

// console.log(res);

//  Array.indexOf,Array.includes,ARRay.find  /////////////

// let myFavFoods = ["pizza", "burgers", "pasta"];

// console.log(myFavFoods.indexOf("pizza"));
// console.log(myFavFoods.includes("pizza"));

// console.log(myFavFoods.includes("pizza"));  // Turns into a boolean

// let students = [
//     {
//         name: "ABC",
//         ae:15
//     },
//     {
//         name: "DEF",
//         age: 16
//     }
// ]

// const student = students.find(s => {     // Using .find assists in finding object value
//     return s.name == 15
// })

// console.log(student)

// == vs. ===  ////////////////////////////////////////////////////////////////////

// let a = //
// let b = //

// console.log(a === b)

//  1. The types of a and b are same -> value, memory
//  2. The types pf a and b are different -> type conversion

// let a = 2
// let b = "2"

// console.log(a === b);

// 1. Check types
// 2. If type is not the same, and operator is === -> return false
// 2. If type is not the same, and operator is == -> change the type of 1 variable
// 3. Compare the values ( types are now the same)

// let b = 0

// if (b !== undefined || b !== false) {     // This testing not defined condition
//     console.log("b is defined")
// } else {
//     console.log("b is not defined")
// }

//  JS DOM  //////////////////////////////////////////////////////////////////////

// DOM is a tree of elements in JS

//                       Document
//                 Root Element (<html>)
//     Element (<head>)              Element(<body>)
//     Element (<title>)     Element(<h1>)   Element(<p>)
//      Text "My text"      Text "My Header"  Text My Paragraph"

// Document / Window Object  ////////////////////////////////////////////////////

// document gives you axxess to whole document
// To view document properties console.dir(document)

// window object has alot of properties- Javascript objects, functions, and variables are members of window object

// window.document == document
// true

// getElementById //////////////////////////////////////////////////////////////

// document.getElementById("name")
//     <h1 id="name">My name is John</h1>
// console.dir(document.getElementById("name"))  // Can view properties of #name, can make changes
// p #name
// document.getElementById("name").innerText = 'My name is codedamn"   // Changes are made on document immediately

// Ways to transverse DOM /////////////////////////////////////////////////////

// let selectors = document.getElementsByClassName("name")
// gives list of :name" class
// selectors[0].innerText = "First element"    // makes changes
// selectors[1].innerText = "Second element"   // makes changes

// let elements = document.getElementsByTagName("p")
// elements // calling gives you list of p
// elements[0].innerText = "asdffds"  // changes text immediately
// innerHTML is used when you use <p> </p> format

// setTimeout and setInterval  /////////////////////////////////////////////////////////////////

// console.log("Program starts");
// let i = 0;

// setInterval(() => {
//     document.getElementById("name").innerText = ++i;
// }, 2000)

// console.log("Program ends");

// setTimeout only does one time

// setInterval repeats

// clearTimeout and clearInterval  ///////////////////////////////////////////////////////

// console.log("Program starts");
// let i = 0;

// let id = setInterval(() => {                            // setInterval stops at set time   // setTimeout stops immediately
//     document.getElementById("name").innerText = ++i;

//     if (i == 100) {
//         clearInterval(id);

//     }
// }, 8000)

// console.log(id);

// console.log("Program ends");

//  Event Handlers  ///////////////////////////////////////////////////////////////////

// const elem = document.getElementById("name");

// elem.onclick = function() {                         // ondbclick  - double click
//     console.log("Clicked!!");
// }

// function myFunction() {
//     console.log("Something else clicked!")
// }

// Exception/Error Handling ///////////////////////////////////////////////////////////////

// let i = 100;
// let j = 2;

// try {
//     if(j == 0){
//         throw " j cannot be zero"
//     }
//     console.log(i/j);
// } catch (err) {
//     console.log(err)
// }

// console.log("Nice little statement");



