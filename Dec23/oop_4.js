// Inheritance
// Inheritence is acheived using extends keyword

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal{

}

let dog1 = new Dog();
dog1.eat();

// output: 
//Animal is eating
