//https://bbe0657f.widgets.sphere-engine.com/lp?hash=IeeQDXFQmd
//Equality
/*
Problem Statement You are given an array A, consisting of N integers. In one operation you can chose an integer K, (1<=K<=N) and increase or decrease each element A1, A2, …, AK by 1.

Find the minimum number of operations required to make all the elements of the array A equal. You are given T independent test cases.

Constraints 1 <= T <= 10 1 <= N <= 105 -108 <= Ai <= 108 All input values are integers.

Input Format First-line contains T. First line of each test case consists of N. Second line of each test case consists of N space separated integers denoting the array A.

Output Format Print in a newline for each test case a single integer denoting the minimum number of operations required to make all the elements of array A, equal.

Sample Input 1 3 2 1 2

Sample Output 2

Explanation of Sample In first operation, we can choose K = 1, and decrease A1 by 1. A = [1, 1, 2] In 2nd operation, we can choose K=2, and increase A1, A2 by 1, A = [2, 2, 2]


*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString1 = "";
let inputString = "";
let currentLine = 0;
 
process.stdin.on('data', function (userInput) {
    inputString1 = inputString1 + userInput;
});
 
process.stdin.on('end', function(x) {
    inputString1.trim();
    inputString1 = inputString1.split("\n"); 
    for(let i = 0; i< inputString1.length ; i++ ) {
        inputString += inputString1[i].trim() + ' ';
    }
    inputString.trim();
    inputString = inputString.split(" ");
    main();
});
 
function readline() { 
    return result = inputString[currentLine++];
}
 
function main() {
	let t = parseInt(readline());
	while(t--){
		let n = parseInt(readline());
		let arr = [];
		for(let i=0;i<n;i++){
			arr[i] = parseInt(readline());
		}
 
		let ans=0;
		for(let i=1;i<n;i++){
			ans = ans + Math.abs(arr[i]-arr[i-1]); // logic
		}
		console.log(ans);
	}
}
