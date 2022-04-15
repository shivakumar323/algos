//https://relevel.com/courses/backend-development-course-0001/schedule/class-details/37417e01-1bff-4130-bd40-c809b9292e2c/assignment/fdf8b34e-947e-48fd-af82-13a09d5fd392
//https://docs.google.com/document/d/1V38vQqFWppQlCiHIqCOoFC0X6vxKDQqu/edit
//ide link - https://bbe0657f.widgets.sphere-engine.com/lp?hash=NnOg9dkCAO

/*
Question Name: Merge Both

Problem Statement

You are given two sequences A and B of length N and M.

Add both sequences A and B, Let’s say C will be a new sequence obtained by adding A and B.
Then sort the sequence C in ascending order. 

Constraints
1 <= T <= 5
1 <= N, M <= 10^5
1 <= Ai, Bj <=10^5

Expected Time Complexity: O (N + M)
Note: Use Fast Input Output

Input Format

The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
The first line of each test case contains two space-separated integers N and M.
The second line contains N space-separated integers A1≤ A2≤ ….≤ AN.
The third line contains M space-separated integers B1≤  B2≤  ….≤ BM.

Output Format

For each test case, print the sequence C after sorting. 

Sample Input

2
2 3
1 4
1 2 4
3 1
4 5 6
8

Sample Output

1 1 2 4 4
4 5 6 8


Explanation of Sample

Sample case 1: In this case, A will be {1, 4} and B will be {1, 2, 4} then C will be {1, 4, 1, 2, 4}, And then sort the sequence C {1, 2, 2, 4, 4}.


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
    for(let i = 0; i < N; i++) {
        readLine();
        let Arr = processArray(readLine());
        let Arr1 = processArray(readLine());
        let Arr2 = Arr.concat(Arr1);
        Arr2.sort(function(a, b){return a - b});
        console.log(Arr2);
        
    }
}