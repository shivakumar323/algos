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
});

let currentLine = 0;
function readLine() {
    let result = inputString[currentLine];
    currentLine++;
    return result;
}

function processArray(Arr) {
    let result = [];
    let temp = Arr.split(' ');
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i]));
    }
    return result;
}