//jed's party
/*
Problem Statement
Jed likes parties. He wants to give his birthday parties to his friends. 
For that, he invited N of his friends to the hotel Strange. The ith friend has weight W[i]. 
In hotel Strange, there are N tables arranged for Jed’s friend. The charge for the hotel is the i=0n-2abs(weight of person seating on table i- weight of person seating on table (i+1))
Jed can arrange the seating arrangement for this friend to minimize the hotel charges.

Your task is to determine the minimum Hotel charge he needs to pay.

Constraint 
• 1 <= N <= 103
• 0 <= A[i] <= 109
• All input values are integers.

Input Format
• First-line contains N.
• Second line contains N space-separated integers denoting the array A.

Output Format
• In the first line print the minimum Hotel charge he needs to pay

Sample Input 1
4
3 2 4 6


Sample Output 1
4

Explanation of Sample 1
For the test case, we can out of many arrangements one of the arrangements is {6,4,3,2} having minimum Hotel charge he needs to pay and total charge he needs to pay is 4. 

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

function main() {
    let N = parseInt(readLine());
    let A = processArray(readLine());

    A.sort(function(a,b) {return b - a});
    
    let amount = 0;
    for(let i = 0; i < A.length - 1; i++) {
        amount += Math.abs(A[i] - A[i + 1])
    }
    console.log(amount);
}