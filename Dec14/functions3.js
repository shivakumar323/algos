// how to immediately create and invoke a function

/* 
to create and invoke a function, we generally do it in following way
function hello() {
    console.log("hello");
}
hello();

but if we want to create and iinvoke it immediately without explicitly calling the created function
it can be done in following way
*/

(function hello() {
    console.log(hello);
})();
