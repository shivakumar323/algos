// Polymorphism
// Polymorphism means many forms

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    eat() {
        console.log("Dog is eating");
    }
}

class Horse extends Animal {
    eat() {
        console.log("Horse is eating");
    }
}

let animal = new Animal();
animal.eat();

let dog = new Dog();
dog.eat();

animal = new Dog();
animal.eat();

animal = new Horse();
animal.eat();

/*
output: 
Animal is eating
Dog is eating
Dog is eating
Horse is eating
*/