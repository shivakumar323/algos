/*
Amy calls a positive number P, “dominating” if it follows all the conditions below:
Decimal representation of the integer consists only of digit X and Y.
Sum of digits of P, has strictly more than K divisors.


Amy influenced you to find how many “dominating” numbers of length exactly N exists. Since the answer can be large print it modulo 998244353.


You are given T independent test cases.  


Constraints :

 

1 <= T <= 10^5
1 <= X < Y <= 9
1 <= N, K <= 10^5
Sum of N over all test cases doesn’t exceeds 10^6.
All input values are integers.

 


Input Format :

 

First-line contains T.
Next T lines each contains four space separated integers X, Y, K and N.  
 

 

Output Format :

 

Print in a newline for each test case a single integer denoting how many “dominating” numbers of length exactly N exists modulo 998244353.
 

 

Sample Input :


2
1 2 2 2
1 3 2 2

 


Sample Output :


1
3

 

Explanation of Sample  :


 
For 1st test case, we have only one “dominating” number i.e., 22. Sum of digits = 4, divisors of 4 = 1,2,4
For 2nd test case, dominating numbers are: 13, 31 and 33.

 



*/

process.stdin.resume();
process.stdin.setEncoding('utf8');
// your code goes here

let inputString = "";
process.stdin.on("data", function(userInput) {
    inputString +=  userInput;
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
    let result = [];
    let temp = arr.split(' ');
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i]));
    }
    return result;
}
 
function main() {
    let N = Number(readLine());
    for(let i = 0; i < N; i++) {
        var arr1 = processArray(readLine());
        let temp1 = [arr1[0] + arr1[0], arr1[0] + arr1[1], arr1[1] + arr1[0], arr1[1] + arr1[1]];
        let k = arr1[2];
        let count = 0;
        for(let j = 0; j < 4; j++) {
        	let num = temp1[j];
        	let count1 = 0;
        	for(let m = 1; m <= num; m++) {
        		if(num % m === 0) {
        			count1++;
        		}
        	}
        	if(count1 > k) {
        		count++;
        	}
        }
        console.log(count);
    }
}
