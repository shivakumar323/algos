// Matrix sum
/*
Matrix Sum
Problem Statement Given two arrays A and B both of length N. Consider a 2-D array C with N rows and N columns with C(i)(j) = A(i)B(j) for each 1<=i,j<=N.

Print the sum of all elements of the 2-D array C.

Input Format First line contains a single integer denoting N. Next line contains N space separated integers denoting the elements of array A. Next line contains N space separated integers denoting the elements of array B.

Output Format Print the sum of all elements of the 2-D array C.

Constraints 1<=N<=105 1<=Ai<=104

Sample Input

4

5 1 2 3

1 9 2 4

Sample Output 176

Explanation of Sample

C11 = 51, C12 = 59, C13 = 52, C14 = 54 C21 = 11, C22 = 19, C23 = 12, C24 = 14 C31 = 21, C32 = 29, C33 = 22, C34 = 24 C41 = 31, C42 = 39, C43 = 32, C44 = 34

Hence array C = |5 45 10 20 | |1 9 2 4 | |2 18 4 8 | |3 27 6 12|

Sum of all elements of C = 5+45+10+20+1+9+2+4+2+18+4+8+3+27+6+12 = 176

*/
process.stdin.resume();
process.stdin.setEncoding("utf-8");

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
    let B = processArray(readLine());
    
    let c1 = 0;
    let c2 = 0;
    let sum = 0;
    // for(let i = 0; i < N; i++){
    //     for(let j = 0; j < N; j++) {
    //         sum += A[i] * B[j];
    //     }
    // }
    for(let i = 0; i < N; i++) {
        c1 += A[i];
        c2 += B[i];
    }
    
    sum = c1 * c2;

    console.log(sum);
}