// deep dive in to functions continued

/*
in js 
1. function can behave like any other variable
2. function can be assigned to a variable
3. fuction can be passed as an argument to a function
4. function can be returned from a function

let us see above points with example

2. function can be assigned to a variable:

var sum = function (a, b) {
    return a + b;
}

to call sum function :
sum(3, 4); // returns 7


3. fuction can be passed as an argument to a function:

var teacher = function () {
    return "Teacher";
}
console.log(teacher()) // Teacher
var student = function () {
    return "Student";
}

var greet = function(func) {
    console.log("welcome", func)
}

greet(teacher()) // prints welcome Teacher


4. function can be returned from a function:

function welcome() {
    return function {
        console.log("hello");
    }
}

welcome()() // hello


*/
function welcome() {
    return function () {
        console.log("hello");
    }
}

welcome()(); //