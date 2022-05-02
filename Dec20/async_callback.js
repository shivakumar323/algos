// In today's session we will see how asynchronous programming works in js
/*
Refer to screenshots for basic idea on synchronous and asynchronous programming 

today's session is dedicated to async programming in js using callbacks

consider below code as an example of async programmin using callbacks

function greet(callbackFn) {
    callbackFn();  // here we are executing  the callbackFn first to print Hi, which is passed as an argument to the greet function
    console.log("welcome to grandline");
}

greet(function() {
    console.log("Hi");
});

output : 
Hi
welcome to grandline

in the above example we are using callback function to print Hi first and then print 
welcome to grandline




Now go look at capture5 screenshot


*/
function greet(callbackFn) {
    callbackFn();  // 
    console.log("welcome to grandline");
}

greet(function() {
    console.log("Hi");
});

