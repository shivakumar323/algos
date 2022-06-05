// object orientd principles
/*
Abstraction
Encapsulation
Inheritence
Polymorphism

1. Abstraction - hiding unnecessary details or implementation details for security purpose and better customer usage

Abstraction involves hiding the methods inside the class

we have to know the concept called prototype in js before understanding the abstraction in js

// prototype: 
Prototype is nothing but an object
In js every function will have a reference to prototype and every object will have reference to prototype(similar to object class in java)

we will now see how function references prototype in js

function Student() { // implementing object using function 
    this.name = "Shiva"; // this keyword makes Student as object
    this.age = 25;
}

Student.prototype.nationality = "Indian";
Student.prototype.gender = "Male";
Student.prototype.sing = function() {
    console.log("Singing");
}

let student = new Student();

console.log(Student);
console.log(Student.prototype);
console.log(student);
console.log(student.name);
console.log(student.nationality);
console.log(student.sing());

output: 
[Function: Student]
{ nationality: 'Indian', gender: 'Male', sing: [Function (anonymous)] }
Student { name: 'Shiva', age: 25 } // public details, nationality, gender, sing() is hidden here using prototype
Shiva
Indian // nationalty of an object can still be accessed by calling it explicitly
Singing


This is how abstraction is implemented in js using prototype.

in case of objects we can't acess prototype in the same way as functions(functionName.prototype)
instead there is an other way to access prototype of an object(objectName.__proto__), it is done by following way:

function Student() { // implementing object using function 
    this.name = "Shiva"; // this keyword makes Student as object
    this.age = 25;
}

let obj = new Student();

console.log(Student);
console.log(Student.prototype); // {}
console.log(obj.prototype); // undefined
console.log(obj.__proto__); // {}



prototypes are enumerable that is can be looped or iterated
 
function Student() { // implementing object using function 
    this.name = "Shiva"; // this keyword makes Student as object
    this.age = 25;
}

let obj = new Student();

console.log(Student.prototype); // {}
Student.prototype.a = 1;
Student.prototype.b = 2;
Student.prototype.c = 3;

console.log(Student.prototype); // { a: 1, b: 2, c: 3 }

for(item in Student.prototype) {
    console.log(item);
}

output: 
{}
{ a: 1, b: 2, c: 3 }
a
b
c

*/

function Student() { // implementing object using function 
    this.name = "Shiva"; // this keyword makes Student as object
    this.age = 25;
}

let obj = new Student();

console.log(Student.prototype); // {}
Student.prototype.a = 1;
Student.prototype.b = 2;
Student.prototype.c = 3;

console.log(Student.prototype); // { a: 1, b: 2, c: 3 }

for(item in Student.prototype) {
    console.log(item);
}
