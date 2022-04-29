/*
Requirements: Given a string, find whether it contains an additive sequence or not. A string contains an additive sequence if its digits can make a sequence of numbers in which every number is an addition of previous two numbers. A valid string should contain at least three digits to make one additive sequence.
Examples:

Input : s = “235813”
Output : true
2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13


*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = "";

process.stdin.on("data", function(userInput) {
    inputString += userInput;
});

process.stdin.on("end", function(x) {
    inputString.trim();
    inputString = inputString.split('\n');
    main();
})

let currentLine = 0;

function readLine() {
    let result = inputString[currentLine];
    currentLine++;
    return result;
}

function main() {
    let str = readLine();

    for(let i = 0; i < str.length - 2; i++) {
        let sum = Number(str[i]) + Number(str[i + 1]);
        let len = sum.length;
        
        let x = str.substring(i + 2, i + 2 + len);
        if(!Number(x) == sum) {
            console.log(false);
            break;
        }
        // this problem is not completely solved will solve it later

    }
}