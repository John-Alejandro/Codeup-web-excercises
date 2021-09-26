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

