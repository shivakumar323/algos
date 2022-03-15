// link for the question - https://bbe0657f.widgets.sphere-engine.com/lp?hash=mcihi8Fmxh
/* 
MAX PREFIX
Problem Statement

You are given an array A of N integers. We define PK as prefix sum till the Kth element. So, P1 = A1, P2 = A1+A2, P3 = A1+A2+A3 , .. and so on.

You are also given Q queries. In each query you will be given two integers L and R (1<=L<=R<=N), find the maximum value among PL, PL+1, …, PR.

Constraints 1 <= N <= 1000 1 <= L<=R <= N -100 <= Ai <= 100 1 <= Q <= 1000

Input Format First-line contains two space separated integers N and Q. Second line contains N space separated integers denoting the array A. Next Q lines each contains two space separated integers L and R.

Output Format Print in a newline for each query a single integer denoting the maximum value among PL, PL+1, …, PR.

Sample Input 3 2 -1 2 -3 1 2 2 3

Sample Output 1 1

Explanation of Sample We have P1 = -1, P2 = 1, P3 = -4. So, for 1st query, max(P1, P2) = 1 and for 2nd query max(P2, P3) = P2 = 1
*/

//your code goes here
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
let currentLine = 0;
function readLine() {
    let result = inputString[currentLine];
    currentLine++;
    return result;
}
function processArray(arr) {
    let temp = arr.split(' ');
    let result = [];
    for(let i = 0; i < temp.length; i++){
        result.push(Number(temp[i]));
    }
    return result;
}

function main() {
    let line_1 = readLine();
    let line_2 = readLine();
    let line1 = processArray(line_1);
    let line2 = processArray(line_2);
    console.log(line1);
    console.log(line2);
    for(let i = 0; i < line1[1]; i++) {
        let line_3 = readLine();
        let line3 = processArray(line_3);
        
        let max_sum = 0;
        for(let k = line3[0] - 1; k < line3[1]; k++) {
            let current_sum = find_sum(line2, k);
            if(current_sum > max_sum) {
                max_sum = current_sum;
            }
        }

        console.log(max_sum);
    }
}

function find_sum(arr, pref) {
    sum = 0;
    for(let j = 0; j <= pref; j++) {
        sum += arr[j];
    }
    return sum;
}