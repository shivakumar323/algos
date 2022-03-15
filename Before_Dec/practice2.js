/*Problem Statement

We define lexicographic ordering or the dictionary ordering of arrays as follows - 

Given two arrays A and B, A is lexicographically smaller than B if there exists an index i such that A[i] < B[i] and A[j] = B[j] for all indices 0 <= j < i.

Let's take a few examples to understand the definition.

A = [1, 2, 3, 4, 5], B = [2, 3, 4, 4, 6]
Here A is lexicographically smaller than B as A[0] < B[0]
A = [9, 10, 1, 1, 3, 4], B = [9, 10, 1, 1, 4, 2]
Here A is lexicographically smaller than B as A[4] < B[4] and for all indices before that A[j] = B[j]
A = [10, 11, 1, 2], B = [10, 9, 9, 9]
Here B is lexicographically smaller than A.
Given an array A of N elements, we want to convert it to the lexicographically smallest array possible using at-most k operations. In each operation, we can perform the following - 

Select two different elements from the array. Add 1 to one of them and subtract 1 from the other.

NOTE: You are allowed to perform this operation only when the elements of the array remain non-negative even after the operation. 

Find out the lexicographically smallest array possible after applying at most k operations. 



Input Format

First line contains the number of test cases T. Next T lines follows
The first line of each test case contains two integer - N and k
The next line of each test case contains N space separated integers.


Output Format

For each test case print the output in a new line having N spaced integers. 


Constraints

1 <= T <= 20
1 <= N <= 100
1 <= K <= 10^4
0 <= A[i] <= 100

Sample Input

1

2 1

10 1 



Sample Output

9 2

In one operation we decrease the first element by 1 and increase the second element by 1. 
*/



//-------------DO NOT MODIFY THIS SECTION------------------------
let input = ''
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => main(input))
 
function main(input) {
    let lines = input.trim().split('\n');
    let T = +lines[0];
    for(let i = 1; i < lines.length; i += 2) {
        let [n, k] = lines[i].split(' ').map(v => +v);
        const arr = lines[i + 1].split(' ').map(v => +v);
    	solve(arr, n, k);
    }
}
//--------------------------------------------------------------- 
 
function solve(A, n, k) {
	//Write your code here
    
	
}
