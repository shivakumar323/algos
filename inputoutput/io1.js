const readline = require("readline");   // readline module provided by nodejs to take user input
let reader = readline.createInterface({   // reader tool which we are using for creating for performing stdio and stdout, it uses createInterface method
    input: process.stdin,
    output: process.stdout
});
let x = reader.question('', (ans) => { // question function asks question to user i.e., it takes a input. '' first statement inside question function takes value to display the message while taking the input. ans stores the input by user
    console.log("input by user is: ", ans);
    reader.close(); // closes the question method i.e.,input functionality(we are closing the reader object)
})
console.log(x)

process.stdout.write("Hi\n");
process.stdout.write("Hello\n");

