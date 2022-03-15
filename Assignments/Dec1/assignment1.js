/*
SKY

Problem Statement Amy wanted to reach the sky, by making a magical ladder. She makes the ladder by placing one brick above another. She has N different coloured bricks. Bi denotes the number of bricks of colour i that she has. She takes exactly one day to place one brick above another.

She has to use all the bricks (all bricks of each colour) to reach the sky. There is only one constraint, that’s worrying her now. Her master, told her that she must not use the same colour bricks on any two consecutive days.

Help her to find whether she can form a ladder using the bricks she has or not.

You are given T independent test cases.

Constraints 1 <= T <= 6 1 <= N <= 105 1<= Bi <= 109 All input values are integers.

Input Format First-line contains T. First line of each test case consists of a single integer N. Second line of each test case consists of N space separated integers B(1), B(2), B(3), … and B(N).

Output Format Print in a newline for each test case: 1 if she is able to make the ladder otherwise print 0.

Sample Input 2 2 1 1 2 10 1

Sample Output 1 0

Explanation of Sample

For 1st test case, she can place the brick with colour-1 on day-1 and brick with colour-2 on day-2.

For 2nd test case, it is impossible to build a ladder.
*/


// your code goes here
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
 
    if (N == 1)
        return (B[0] == 1) ? 1 : 0;
 
    let largest = 0, index = -1;
    for (let i = 0; i < N; i++) {
        if (B[i] > largest) {
            largest = B[i];
            index = i;
        }
    }
 
    let sum = 0;
    for (let i = 0; i < N; i++) {
        if (i != index) {
            sum += B[i];
        }
    }
 
    if (largest - 1 <= sum) {
        return 1;
    }
 
    return 0;
}
 
function main() {
 
    let T = Number(readline());
 
    while (T--) {
 
        let N = Number(readline());
        let B = processArray(readline());
 
        console.log(isPossible(B, N));
    }
}