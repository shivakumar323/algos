// object creation in js
// in js object is created as:
/*
const person = new Object();

// attributes and behaviour of an object is defined as : 
person.name = "shiva";
person.age = 25;
person.gender = "male";
person.dance = function() {
    console.log("i am dancing");
}
person.eat = function() {
    console.log("i am eating");
}

// now if we try to print the object person
console.log(person);

output:
{
  name: 'shiva',
  age: 25,
  gender: 'male',
  dance: [Function (anonymous)],
  eat: [Function (anonymous)]
}

// we will now see how to access object's fields and methods.
console.log(person.name); // shiva
console.log(person['name']); // shiva

person.dance(); // i am dancing
const dancefunc = person.dance;
dancefunc(); // i am dancing


// now we will see how to get all the keys of the object
for(key in person) {
    console.log(key);
}
output:
name
age
gender
dance
eat

in order to get all the keys in an array, we can use Object.keys() method

console.log(Object.keys(person));
output: 
[ 'name', 'age', 'gender', 'dance', 'eat' ]

*/
const person = new Object();
person.name = "shiva";
person.age = 25;
person.gender = "male";
person.dance = function() {
    console.log("i am dancing");
}
person.eat = function() {
    console.log("i am eating");
}

console.log(person);
console.log(Object.keys(person));