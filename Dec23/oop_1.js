// we will learn about creating class and objects in js

// we will create class Person in a below way:

class Person {
    constructor(name, age , gender) {// constructor can have 0 or 1 or any number of aarguments and a class can have multiple number of arguments
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // behaviour of object is defined as 

    eat() {  // you don't have to use function keywod while defining the behaviour of the class
        console.log("Person is eating");
    }

    sing() {
        console.log("Person is singing");
    }
}

// creating object from class

let person1 = new Person("Shiva", 25, "Male");
console.log(person1);
console.log(person1.name);
console.log(person1.age);
console.log(typeof(person1));
console.log(typeof(person1.name));
person1.eat();

/*
output: 
Person { name: 'Shiva', age: 25, gender: 'Male' }
Shiva
25
object
string
Person is eating
*/