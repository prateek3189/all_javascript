"use strict" // must be at the top only

//Incorrect Method - Bad Practice
//num = 5;
//alert (num); // Getting Error Message (Uncaught ReferenceError: num is not defined) Because fo not defined the number

//Correct Method - Definining let / const / var
let num = 5;

alert (`This is a use strict Example - Output is ${num}`);
//Variables
let admin, name;
name = "John";
admin = name;

alert (`This is a Variable Example - Output is ${admin}`);

//Const
const COLOR_RED = "#F00;"
const COLOR_BLUE = "#0FF";
const COLOR_ORANGE = "#FF00FF"

let color = COLOR_RED;

alert (`This is a Const Example - Out put is ${color}`);

//Const ERROr Because of they cannot be chnaged
//const myBirthday = '01.01.1987';
//myBirthday = '10.10.1990'; // error, can't reassign the constant!

//Data Types - There are 3 Data Types

//1. String
// There are written styles
//1. "" Double quotes
//2. '' Single quotes
//3. `` backtilt sign
let str = "John";
let str2 = 'F';
let phrase =`This is a Data Types - String  example can embed - Out put is  ${str}`;

alert (phrase);


//2. Boolean Logical Type

let nameFieldChecked = true;
let ageFieldChecked = false;

alert (`This is a Data Type Boolean - True Example ${nameFieldChecked}`);
alert (`This is a Data Type Boolean - False Example ${ageFieldChecked}`);


let isGreater = 4 > 1;

alert (isGreater);

//////////
//Type of Operators
//typeof undefined // "undefined"

//typeof 0 // "number"

//typeof true // "boolean"

//typeof "foo" // "string"

//typeof Symbol("id") // "symbol"

//typeof Math // "object"  (1)

//typeof null // "object"  (2)

//typeof alert // "function"  (3)
