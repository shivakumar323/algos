// call by value and call by reference in js
/*
let us understand call by value and call by reference in the context of functions with arguments

1. pass by value: 
    when ever we pass a primitive value(like int, float etc) as an argument inside the function,
    it is called as pass by value, in pass by value the copy of value is passed as an argument in the 
    function instead of the actual value.
    
for ex: 
function change(num) { // copy of value is passed here
    num = 5;
    console.log(num);
}
let num = 9;
console.log(num); // 9
change(num);  // 5
console.log(num); // 9

output:
9
5
9


2. call by reference
    whenever we pass an object as an argument inside a function then it is called as pass by reference
    it is called as pass by reference because the address of an object is passed as an argument to
    the function

ex:
function change(obj) {
    obj.a = 5;
    console.log(obj);
}

var obj = {a: 1};  // obj stores the address of object {a: 1} i.e., it refters to the object instead of storing it.

console.log(obj);
change(obj);
console.log(obj);

output:
{ a: 1 }
{ a: 5 }
{ a: 5 }
*/

function change(obj) {
    obj.a = 5;
    console.log(obj);
}

var obj = {a: 1};  

console.log(obj);
change(obj);
console.log(obj);

