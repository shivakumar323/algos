//Aric's rule
/*
Problem Statement

Aric has an array A of size N. Aric wants to sort the array according to the rules given below:-
The elements having more number factors come first
If the elements have the same number of factors then the larger number comes first

Your task is to determine the array after sorting according to Aric’s rule.

Constraint 
• 1 <= N <= 100
• 0 <= A[i] <= 100
• All input values are integers.

Input Format
• First-line contains N.
• Second line contains N space-separated integers denoting the array A.

Output Format
• In the first line print the array after sorting according to Aric’s rule

Sample Input 1
5
2 11 8 4 6


Sample Output 1
8 6 4 11 2

Explanation of Sample 1
For the array {2,11,8,4,6} 
Factor of 8 is 1,2,4,8 
Factor of 6 is 1,2,3,6
Factor of 4 is 1,2,4
Factor of 11 is 1,11
Factor of 2 is 1,2
 
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
    let N = Number(readLine());
    let A = processArray(readLine());
    var c;
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N - 1; j++) {
            if(!check(A[j], A[j + 1])) {
                c = A[j];
                A[j] = A[j + 1];
                A[j + 1] = c;
            }
        }
    }
}

function find_factors_count(n) {
    let count = 0;
    for(let i = 1; i <= n; i ++) {
        if(n % i === 0) {
            count++
        }
    }
    return count;
}

function check(a, b) {
    if(find_factors_count(a) == find_factors_count(b)) {
        return a >= b;
    }
    return find_factors_count(a) > find_factors_count(b);
}