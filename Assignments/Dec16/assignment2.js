/*
Assignment 2: 
Consider the following array: 
let colors = ["white", "blue", "magenta", "black", "amber", "teal"]; 
Using array destructuring, assign the first two elements to firstColor and secondColor variables and assign the remaining elements to otherColors variables. Display the values of these three variables.


*/

let colors = ["white", "blue", "magenta", "black", "amber", "teal"];

let [a, b, ...c] = colors;
console.log(a);
console.log(b);
console.log(c);