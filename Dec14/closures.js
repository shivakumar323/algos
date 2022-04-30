// closures in js
/*
1. closure is a function
2. you find closures normally in nested functions 
3. child functions in nested functioning can be closures
4. closure function will have the access to scope of the parent function attributes even after the 
parent function is executed
consider below example:

*/

function outerfunc() {
    var msg = "hello";

    function innerfunc() {
        console.log(msg);  // this has the referece to the outer function variable
    }

    return innerfunc;
}

var innerfunction = outerfunc(); // outerfunc is fully executed

innerfunction(); // this only executes the inner function // output: hello
innerfunction(); // output: hello

// in the above example innerfunc function is called closure
// in real world closure example would be something like parental property
// even after parental expire the property would still remain with the children
