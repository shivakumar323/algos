// prompt-sync is a module used for input output
let prompt = require('prompt-sync')(); 
let name = prompt('what is your name ?');
let x = prompt();
console.log(prompt);

console.log('your name is: ', name);
console.log(x);
console.log(typeof x);
