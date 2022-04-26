// arrow functions in js
// arrow function in js is similar to lambda function in java or python
/*
consider a an example of writing funtion to print hello world as:
function hello() {
    console.log("hello world");
}

using the arrow function in js the above function can be written as:
hello = () => console.log("hello world"); 

example 2:

function sum(a, b) {
    return a + b;
}

arrowed function for the above:
sum = (a, b) => {
    return a + b;
}

if there is only one line in the function and if that line is return statement then the aboove
arrow function can be further reduced as below:
sum = (a, b) => { a + b } // returns a + b

example 3:

function print(n) {
    for(let i = 0; i < n; i++) {
        console.log("hello world");
    }
}

the above function can be written using arrowed function as:
print = (n) =>{
    for(let i = 0; i < n; i++) {
        console.log("hello world");
    }
}




*/

hello = () => console.log("hello world");
hello();