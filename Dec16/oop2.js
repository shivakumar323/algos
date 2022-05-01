/*
1. Naming of the objects and naming of its attributes 
 - object name can start with alphabet, _ and $
 - object name cab contain number, alphabet, _ and $ and its name cannot be like keywords like let, typeof etc

 - objects attribute name can contain number, alphabets, _, $ and also can contain keywords like let, etc

2. Creating object inside function
If we have a use case, that function returns an object
function createObject(name, age, gender) {
    return {name: name,
            age: age,
            gender: gender}
}

console.log(createObject("shiva", 25, "male"));
output : 
{ name: 'shiva', age: 25, gender: 'male' }


the above function can be further reduced to:

function createObject(name, age, gender) {
    return {name,
            age,
            gender}
}

console.log(createObject("shiva", 25, "male"));
output : 
{ name: 'shiva', age: 25, gender: 'male' }


3. more ways of creating objects:

a. creating object with the help of object

function Person(name, age, gender) { // generally function name starts with small letter but when we want to create an object out of funcction then we have to declare it Capital letter at the beginning
    this.name = name;
    this.age = age;
    this.gender = gender;
    // this keyword represents the object that will get created
}
// now to create an object with the above function, 
const person1 = new Person("shiva",  25, "male");
const person2 = new Person("sharana", 25, "male");

console.log(person1);
console.log(person2);
output : 
Person { name: 'shiva', age: 25, gender: 'male' }
Person { name: 'sharana', age: 25, gender: 'male' }


Now if you want to add additional attribute to the Person object with fixed value, 
you have to make use of prototype keyword 

function Person(name, age, gender) { 
    this.name = name;
    this.age = age;
    this.gender = gender;
    // this keyword represents the object that will get created
}
// now to create an object with the above function, 
const person1 = new Person("shiva",  25, "male");
const person2 = new Person("sharana", 25, "male");
console.log(person1);
Person.prototype.nationality = "Indian";  // we are adding attribute to the object which is inherent to it
console.log(person1);  // output will be : Person { name: 'shiva', age: 25, gender: 'male' } 
// Note: the above line will not print the nationality attribute though it has an attribute 
// named nationality that is because we have used prototype to inject attribute to the object 
// which is native to the object. if you want to check the nationality of an object 
// then you have to explicitely call nationality attribute as shown below
console.log(person1.nationality);

output:
Person { name: 'shiva', age: 25, gender: 'male' }
Person { name: 'shiva', age: 25, gender: 'male' }
Indian


If you want to get nationality attribute when you print Person object then you can 
directly add the attribute nationality in the function itself where you define the structure of 
the object with some default value assigned to it like "Indian"

function Person(name, age, gender) { 
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = "Indian";
    // this keyword represents the object that will get created
}
// now to create an object with the above function, 
const person1 = new Person("shiva",  25, "male");
const person2 = new Person("sharana", 25, "male");
console.log(person1);
console.log(person2);  
console.log(person1.nationality);

output:

Person {
  name: 'shiva',
  age: 25,
  gender: 'male',
  nationality: 'Indian'
}
Person {
  name: 'sharana',
  age: 25,
  gender: 'male',
  nationality: 'Indian'
}
Indian


b. creating objects with Object.create() method

const person = {
    nationality: "Indian"
}

const ParentObj = Object.create(person);
ParentObj.name = "shiva";
ParentObj.age = 25;

console.log(ParentObj);
console.log(ParentObj.nationality);

output:
{ name: 'shiva', age: 25 }
Indian
*/

const person = {
    nationality: "Indian"
}

const ParentObj = Object.create(person);
ParentObj.name = "shiva";
ParentObj.age = 25;

console.log(ParentObj);
console.log(ParentObj.nationality);