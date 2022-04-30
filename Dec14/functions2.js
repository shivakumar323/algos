// deep dive in to var, let and const
/*
1. var keyword:

var is used to :
    a. declare variables
    b. initialise variables

for ex: 
var name = "shiva";
console.log(name); // shiva
// now if you try to re initialize name variable 
var name; // it does nothing
console.log(name); // shiva
var name = "sharana";
console.log(name); // sharana



2. let keyword

let keyword was inroduced in js from ES6

variable declared with let can't be redeclared

for ex: 
let name = "shiva";
console.log(name); // shiva
let name; // error
console.log(name);



3. scope of a variable

region of the program where a variable is active and after that it's destroyed
there are two types of scope
a. global scope: - 
    it will be available throughout the js file
    any variable which is defined outside the {} braces has a global scope

for ex:

var a = 5; // global scope

b. local scope:
    there are multiple scopes under local scope
    1) Block scope:
    variable declared inside the { } braces comes under block scope
    it will be available only between the { } it is defined in


    let can be used in different scopes with same variable name:

    let name = "shiva";
    console.log(name); // shiva
    {
        let name = "kumar";
        console.log(name); // kumar
    }
    console.log(name);  // shiva
 
    now if we try to use var instead of let in above example then,
    var name = "shiva";
    console.log(name); // shiva
    {
        var name = "kumar";
        console.log(name); // kumar
    }
    console.log(name);  // kumar

    so we can observe that:

    let  - block scope has effect
    var - bloclk scope has no effect


4. const keyword:

const a; // error - initialization is a must
const a = 5;
const a = 7; // error

{
    const a = 7;
}
console.log(a); // output : 5

note: const - block scope has effect


5. function scope :
function scope applies to var and let but not on const

let a = 1; 
let b = 2;

function change() {
    a = 3;
    b = 4;
}
change();
console.log(a); // 3
console.log(b); // 4


consider another example,
let a = 1; 
let b = 2;

function change() {
    let a = 3;
    let b = 4;
}
change();
console.log(a); // 1
console.log(b); // 2


6. scope in the case of nested functions - lexical scoping 
lexical scoping states that inner function can access outer function variables where as outer function
cannot access inner function variables

ex:
function outerfunc() {
    let msg = "hi"; 

    function innerfunc() {
        let name = "shiva";
    

        function display() {
            console.log(msg + name);
        }
        display();
    }
    innerfunc();
}
outerfunc(); // hishiva
*/ 

function outerfunc() {
    let msg = "hi"; 

    function innerfunc() {
        let name = "shiva";
    

        function display() {
            console.log(msg + name);
        }
        display();
    }
    innerfunc();
}
outerfunc();