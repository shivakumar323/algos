//https://docs.google.com/document/d/1kMbIrWZ4iUfN9m8GeEWYDu8XkPRoJlm--OhIcumnHnw/edit
//https://bbe0657f.widgets.sphere-engine.com/lp?hash=vxBKIZEWKw

/*Question Name: Maximum One
Problem Statement
Given a 2-D matrix consisting of M rows and N columns.
Each row of the matrix is of the form [0 0 0 … 1 1 1] i.e. each row of the matrix first contains some 0’s(possible zero) followed by some 1’s(possible zero).
Print the row having the maximum number of 1’s. If there are many such rows, print the minimum of them. 
Input Format
First line of input contains two space separated integers denoting M and N.
Next M lines contain N space-separated integers denoting the elements of array A.
Output Format
Print the row having the maximum number of 1’s. If there are many such rows, print the minimum of them.
Constraints
1<=M,N<=103
Ai is either 0 or 1.
Sample Input 1
4 5
0 0 1 1 1
0 1 1 1 1
0 0 0 0 1
0 0 1 1 1
Sample Output 1
2
Explanation of Sample 1

Count of 1’s in row 1 = 3, in row 2 = 4, in row 3 = 1, in row 4 = 4. 
Hence the second row having four 1’s has the maximum count of 1’s.
*/

process.stdin.resume();
process.stdin.setEmcoding('utf-8');

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

function processArray(arr) {
    let result = []
    let temp = arr.split(' ');
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i]));
    }
    return result;
}

function main() {
    let N = processArray(readLine());
    let rows = N[0];
    let columns = N[1];

    let input_array = [];
    for(let i = 0; i < rows; i++) {
        input_array.push(processArray(readLine()));
    }
    
    console.log(maximum_one(input_array));
}

function maximum_one(arr) {
    let count = 0;
    let max_index;
    for(let i = 0; i < arr.length; i++) {
        let count1 = 0;
        for(let j = 0; j < arr[0].length; j++) {
            if(arr[i][j] == 1) {
                count1++;
            }
        }
        if(count1 > count) {
            count = count1;
            max_index = i;
        }
    }
    return max_index + 1;
}