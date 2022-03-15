process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = "";
process.stdin.on('data', function (userInput) {
    inputString += userInput;
});
process.stdin.on('end', function (x) {
    inputString.trim();
    inputString = inputString.split('\n');
    main();
});
let curLine = 0;
function readline() {
    let result = inputString[curLine];
    curLine++;
    return result;
}
function processArray(arr) {
    let temp = arr.split(' ');
    let result = [];
    for (let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i]));
    }
    return result;
}
 
// your code here
function isPossible(B, N) {
 
    if (N == 1) {
        return (B[0] == 1) ? 1 : 0;
    }
    else {
        B.sort(function(a,b){return a - b});
        while(B.length > 1) {
            let diff = Number(B[B.length - 1]) - B[0];
            B.pop();
            B.shift();
            B.push(diff);
            if(B.length > 1){
                B.sort(function(a,b){return a - b});
            }
        }
        if(B[0] > 1){
            return 0;
        }
    }
    return 1;
}
 
function main() {
 
    let T = Number(readline());
 
    while (T--) {
 
        let N = Number(readline());
        let B = processArray(readline());
 
        console.log(isPossible(B, N));
    }
}