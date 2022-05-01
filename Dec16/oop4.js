// destructuring objects
// given an array of elements, what if you want to select few selected elements of an array
// it can be done in following way
/*
let arr = [1,2,3,4,5,6];

let [a, b, , , c, ] = arr;

console.log(a);
console.log(b);
console.log(c);

output: 
1
2
5


now if you want only first two elements then you can write as:

let arr = [1,2,3,4,5,6];

let [a, b] = arr;

console.log(a);
console.log(b);

output: 
1
2


now if you want to store first element in a , second element in b and rest of the elements in c
then you can write as:

let arr = [1,2,3,4,5,6];

let [a, b, ...c] = arr; // three dots is used to store rest of the elements in some variable like c 
 
console.log(a);
console.log(b);
console.log(c);

output: 
1
2
[ 3, 4, 5, 6 ]



let us consider we have two variables which store some value, now without using a third variable 
how do you swap the two variables

let a = 1; 
let b = 2;

[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1


// destructuring in the case of objects
let person = {name: "shiva", age: 24, country: "India"}

let {name, country, age} = person

console.log(name); // shiva
console.log(age); // 24

you can also give different names to variables as shown below:
let person = {name: "shiva", age: 24, country: "India"}

let {name: foo, country: bar, age: xyz} = person

console.log(foo); // shiva
console.log(xyz); // 24


// destructuring in a complex structure

consider a below object
let person = {
    name: "shiva",
    address: {
        country: "India",
        state: "Karnataka",
        city: "Bellary"
    },
    hobbies: ["reading", "coding"]
};

let {name: foo,
    address: {
        country: bar,
        state: xyz
    }
} = person;

console.log(foo);
console.log(bar);


output:
shiva
India

*/

let person = {
    name: "shiva",
    address: {
        country: "India",
        state: "Karnataka",
        city: "Bellary"
    },
    hobbies: ["reading", "coding"]
};

let {name: foo,
    address: {
        country: bar,
        state: xyz
    }
} = person;

console.log(foo);
console.log(bar);
