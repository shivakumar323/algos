// Deep dive in to functions - 1
// function hoisting
/*
if you call function above and declare the function below the line where the function is called
js will not throw a error instead it executes the function even tough it is called before declaring provided 
it is defined somewhere in the file

for ex: 
console.log(sum(4,5));
function sum(a, b) {
    return a + b;
}

output : 9
*/