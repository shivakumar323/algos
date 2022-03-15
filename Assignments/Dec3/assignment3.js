//https://bbe0657f.widgets.sphere-engine.com/lp?hash=jqgyk3UNjR
//Amy and sequence
/*
Problem Statement Amy loves integer sequences. She denotes her integer sequence as S1, S2, S3, S4… and so on. Here Si (1<=i<=N) denotes the ith term of the sequence. Her teacher told her the first two elements of the sequence, i.e., S1 = 1 and S2 = 3. Amy knows that for any integer K, (K>2) SK = K + SK-1 %(K-1) + SK-2 %(K-2).

Here X%Y, denotes remainder when X is divided by Y. For example, 5%3 = 2, 6%2=0.

Given N, find the value of SN.

Constraints 1 <= N <= 106 All input values are integers.

Input Format First-line contains N.

Output Format Print a single integer denoting the value of SN.

Sample Input 4

Sample Output 6

Explanation of Sample S1 = 1, S2 = 3 S3 = 3 + (S2%2) + (S1%1) = 3+1+0 = 4 S4 = 4 + (S3%3) + (S2%2) = 4+1+1 = 6

*/

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";

process.stdin.on('data', function(userInput) {
    inputString += userInput;
})

process.stdin.on('end', function(x) {
    inputString.trim();
    inputString = inputString.split('\n');
    main();
})

let currentLine = 0;
function readline() {
    let result = inputString[currentLine];
    currentLine++;
    return result;
}

// function main() {
//     let n = parseInt(readline());
//     let arr = [];
// 	arr[0] = 0, arr[1] = 1, arr[2] = 3;
// 	for(let i=3;i<=n;i++){
// 		arr[i]=i + arr[i-1]%(i-1) + arr[i-2]%(i-2);
// 	}
// 	console.log(arr[n]);

// }
function main() {
    let n = parseInt(readline());
    let arr = [1, 3];
	for(let i=3;i<=n;i++){
		arr[i - 1]=i + arr[i-2]%(i-1) + arr[i-3]%(i-2);
	}
	console.log(arr[n - 1]);
}

