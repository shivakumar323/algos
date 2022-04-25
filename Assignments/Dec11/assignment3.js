//https://docs.google.com/document/d/1LVZtW266Asulp6xBu0f0praueLe932pvVHGFgwcstyY/edit
//https://bbe0657f.widgets.sphere-engine.com/lp?hash=Jd1UzezNmD
/*Question Name: Zero Destruction
Problem Statement
Given a matrix A consisting of M rows and N columns. If an element of the matrix is 0, set that element’s entire row and column to 0. 
In other words if Aij =0 for any 1<=i<=M, 1<=j<=N, then make Ai1=0, Ai2=0, … AiN=0, A1j=0, A2j=0, …. AMj=0
Print the final matrix.
Note : 
Do this using O(1) extra space.
Input Format
First line contains two space separated integers denoting M and N.
Next M lines contain N space-separated integers denoting the elements of array A.
Output Format
Print the final matrix.
Constraints
1<=M,N<=103
0<=Ai<=105
Sample Input 1
3 4
1 2 3 4
5 0 7 8
9 10 11 0
Sample Output 1
1 0 3 0 
0 0 0 0 
0 0 0 0
Explanation of Sample 1



Initial matrix :
1 2 3 4
5 0 7 8
9 10 11 0

A22, A34 is 0, hence make 2nd, 3rd row, and 2nd, 4th column of the matrix 0.

Final matrix :
1 0 3 0
0 0 0 0
0 0 0 0
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
    let result = inputString[currentLine]
    currentLine++;
    return result;
}

function processArray(arr) {
    let result = [];
    let temp = arr.split(' ');
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i]));
    }
    return result;
}

function main() {
    let N = processArray(readLine());
    let input_array = [];
    for(let i = 0; i < N[0]; i++) {
        input_array.push(processArray(readLine()));
    }
    let destructive_index = find_destructive_indexes(input_array);
    console.log(destructive_index);
    for(let j = 0; j < destructive_index.length - 1; j += 2) {
        destruct(input_array, destructive_index[j], destructive_index[j + 1]);
    } 
    console.log(input_array);
}

function find_destructive_indexes(arr) {
    zeroth_indexes = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[0].length; j++) {
            if(arr[i][j] === 0) {
                zeroth_indexes.push(i);
                zeroth_indexes.push(j);
            }
        }
    }
    return zeroth_indexes;
}

function destruct(arr, m, n) {
    for(let i = 0; i < arr[0].length; i++) { // destructing the given row
        arr[m][i] = 0;
    }

    for(let j = 0; j < arr.length; j++) {
        arr[j][n] = 0;
    }
}