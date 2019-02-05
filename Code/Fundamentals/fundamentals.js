"use strict" // must be at the top only

//Incorrect Method - Bad Practice
//num = 5;
//alert (num); // Getting Error Message (Uncaught ReferenceError: num is not defined) Because fo not defined the number

//Correct Method - Definining let / const / var
// let num = 5;
//
// alert (`This is a use strict Example - Output is ${num}`);
// //Variables
// let admin, name;
// name = "John";
// admin = name;
//
// alert (`This is a Variable Example - Output is ${admin}`);

//Const
// const COLOR_RED = "#F00;"
// const COLOR_BLUE = "#0FF";
// const COLOR_ORANGE = "#FF00FF"
//
// let color = COLOR_RED;
//
// alert (`This is a Const Example - Out put is ${color}`);

//Const ERROr Because of they cannot be chnaged
//const myBirthday = '01.01.1987';
//myBirthday = '10.10.1990'; // error, can't reassign the constant!

//Data Types - There are 3 Data Types

//1. String
// There are written styles
//1. "" Double quotes
//2. '' Single quotes
//3. `` backtilt sign
// let str = "John";
// let str2 = 'F';
// let phrase =`This is a Data Types - String  example can embed - Out put is  ${str}`;
//
// alert (phrase);


//2. Boolean Logical Type

// let nameFieldChecked = true;
// let ageFieldChecked = false;
//
// alert (`This is a Data Type Boolean - True Example ${nameFieldChecked}`);
// alert (`This is a Data Type Boolean - False Example ${ageFieldChecked}`);
//
//
// let isGreater = 4 > 1;
//
// alert (isGreater);

//////////

//Type Conversions
//Type of Operators
//ToString
// let value = true;
// alert(typeof value); // boolean

//typeof undefined // "undefined"

//typeof 0 // "number"

//typeof true // "boolean"

//typeof "foo" // "string"

//typeof Symbol("id") // "symbol"

//typeof Math // "object"  (1)

//typeof null // "object"  (2)

//typeof alert // "function"  (3)

//alert( Boolean(1) ); // true
//alert( Boolean(0) ); // false

//alert( Boolean("hello") ); // true
//alert( Boolean("") ); // false

//ToBoolean
//Please note: the string with zero "0" is true
//alert( Boolean("0") ); // true
//alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

//"" + 1 + 0 = "10" // (1)
//"" - 1 + 0 = -1 // (2)
//true + false = 1
//6 / "3" = 2
//"2" * "3" = 6
//4 + 5 + "px" = "9px"
//"$" + 4 + 5 = "$45"
//"4" - 2 = 2
//"4px" - 2 = NaN
//7 / 0 = Infinity
//" -9  " + 5 = " -9  5" // (3)
//null + 1 = 1 // (5)
//undefined + 1 = NaN // (6)

/// Operators

//unary
// let x = 1;
// x =-x;
// alert (`This is unary Example - Out put is ${x} unary negation was applied`);

//An operator is binary if it has two operands. The same minus exists in binary form as well:
// let a = 1, b = 3;
// alert(`This is binary operands example output is ${b - a}`  ); // 2, binary minus subtracts values
//
// let s = "My" + "String";
//
// alert (`This is concatenation + string ${s}`);

// Operators

// function plus(){
//   let a = 5;
//   let b = 4 ;
//   let c = (a + b);
//   alert (c);
// }

// function minus(){
//   let a = 5;
//   let b = 4 ;
//   let c = (a - b);
//   alert (`5-4= ${c}`);
// }
//
// function divide(){
//   let a = 5;
//   let b = 5 ;
//   let c = (a / b);
//   alert (`5/5= ${c}`);
// }
//
// function multiply(){
//   let a = 5;
//   let b = 4;
//   let c = (a * b);
//   alert (`5*4= ${c}`);
// }
// function incremental(){
//   let counter = 2;
//   counter++;      // works the same as counter = counter + 1, but is shorter
//   alert( `2++ = ${counter}` ); // 3
// }
//
// function decremental(){
//   let counter = 2;
//   counter--;      // works the same as counter = counter - 1, but is shorter
//   alert( `2-- = ${counter}` ); /// 1
// }

//Comparision
// let g = 2;
// let h = 12;
//
// alert( `"2" < "12" ${g < h} ` ); // true
//
// alert( `"2" > "12" ${g > h} ` ); // false
//
// alert( `"2" == "12" ${g == h} `); // false (wrong)
// alert( `"2" != "12" ${g != h} ` ); // true (correct)



//Conditional
// let login = prompt("Test");
// let message = '';
// if (login == 'Employee') {
//   message = 'Hello Employee';
// } else if (login == 'Director') {
//   message = 'Greetings Director';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
//
// alert (message);
//
//
// let age = prompt (18);
//
// let accessAllowed = age > 18 ? true : false;
//
// if (accessAllowed == true){
//   alert ("Your age is > 18. You have a Access Allowed.");
//   //alert (`Access allowed true or false =  ${accessAllowed}`);
// } else {
//   alert ("Your age is < 18. So You do nat have a Access Allowed.");
// }

//alert (`You have access allowed ${accessAllowed}`);

// Logical Operators
// &&
// let hour = prompt(12);
// let minute = prompt(30);
// let currentHour = hour;
// let currentMinute = minute;


//debugger;
// if (currentHour == 12 && currentMinute == 30){
//   alert (`Logical Operators --- The time is ${currrentHour},":", ${currentMinute}`);
// }

//OR
// let hr = prompt(9);
// let getHour = hr;
// if (getHour < 10 || getHour > 18){
//   alert ("Office is closed");
// }

//LOOP
// Find Even numbers
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( `The even number is ${i}` );
//   }
// }

//Incremental array loop
// for (let i = 0; i < 5; i++) alert( i );


//Switch case

// let a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert( `Switch Case is ${0}` );
//     break;
//
//   case 1:
//     alert( `Switch Case is ${1}` );
//     break;
//
//   case 2:
//   case 3:
//     alert( `Switch Case is ${2,3}` );
//     break;
// }


//Functions

// let userName = 'John';
//
// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
//
// showMessage();
