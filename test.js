var fName="Greg";
var book= "greg's book";
var lName="Brooks";
var myAge="27";
var student= true;
var student= false;
let hometown="Indinapolis";

const DIMEVAL =10;
let fullName=fName +" "+ lName;

console.log(hometown);
document.write("I love my d");
document.getElementById('fullName').
innerHTML += fullName + "is <i>" + myAge + "</i> years old!";
console.log("student:" + typeof student);
console.log("DIMEVAL" + typeof DIMEVAL);

// Lunch problem
let banana= 1.5;
let sandwich= 4.5;
let chips= 1.75;
let drink= 2;

let lunch= banana + sandwich+ drink+chips*2;
document.write("Lunch" + lunch);
const TAXRATE= 0.07;
let lunchTotal= lunch+(lunch*TAXRATE);
let cash=13.30;
document.write("<p>Do you have enough cash for lunch?:" + (cash>lunchTotal) + "</p>");