// in today's session we will be deep diving in to js concepts
//1. Types of functions based on functionality
/*
there are two types of functions based on functionality, they are:
1) pure function which is also called as stateless function
2) impure function which is also called as statefull function

1) pure function / stateless function:
    a function is called pure function if output of function is only dependent on input provided
    
    ex: 
    var sum = function(a, b) {
        return a + b;
    }

    console.log(sum(4, 5)) // output will be 9

    in the above example output is dependent only on the input provide, so it is called as pure function

2) impure function / stateless function
    a function is called impure function if its output is not only dependent on input provided but,
    dependent on external variables too.

    ex:

    var message = "Hi";
    var greet = function() {
        console.log(message);
    }
    console.log(greet()); // output : Hi
    message = "Bye";
    console.log(greet()); // output: Bye

Note: Ideally functions are preferred to be pure rather than impure because,
in impure fuctions if the external varialble is based on some third party tool for ex, google maps
and if google maps go down then it will impact our function. So ideally pure functions are preferred
over impure functions.


*/