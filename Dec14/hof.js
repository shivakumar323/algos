// higher order functions - first class citizens
/*
1. hof is a type of function
2. it either accepts functions as an arguments or it goes and returns a function
consider below examaple

*/

const greetFunc = function(name) {
    // return a function to make it higher order function
    return function(arg) {
        console.log("Hi" + name + " " + arg);
    }
}

const greetFunction = greetFunc("shiva");
greetFunction("how are you");
// output - Hishiva how are you