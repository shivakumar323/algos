// Encapsulation
// Encapsulation refers to providing the controlled access to most important part of an object

class Person {
    
    constructor() {
        var name;
        var age;
    }

    getName() {
        return this.name;
    }
    
    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

}

console.log(Person);
var person1 = new Person();
console.log(person1);
person1.setName("Shiva");
console.log(person1.getName());
person1.age = 25;
console.log(person1.getAge());
console.log(person1.age);

/*
output:
[class Person]
Person {}
Shiva
25
25
*/
