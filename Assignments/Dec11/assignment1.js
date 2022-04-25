// https://docs.google.com/document/d/1_fToXBAdqhvzGvDhnqIEA6M2VSkJkJypxzuy3lI0EzM/edit
/*
Question Name: Change Dimension
Problem Statement
Given a matrix A of dimensions M x N(i.e. consisting of M rows and N columns).
Print this matrix in P x Q dimensions.
For example consider A = [a11 a12 a13 a14]
                                          [a21 a22 a23 a24]
                                          [a31 a32 a33 a34]
Then Matrix A in dimensions 4 x 3 = [a11 a12 a13]
                                          	           [a14 a21 a22]
                                     	           [a23 a24 a31]
				           [a32 a33 a34]
Then Matrix A in dimensions 2 x 6 = [a11 a12 a13 a14 a21 a22]
				           [a23 a24 a31 a32 a33 a34]
Note :
Do this using O(1) extra space.
Input Format
First line contains two space-separated integers denoting M and N.
Next M lines contain N space-separated integers denoting the elements of array A.
The next line contains two space-separated integers denoting P and Q.
Output Format
Print matrix A in P x Q dimensions.
Constraints
1<=M,N<=103
1<=Ai<=104
1<=P,Q<=103
M*N = P*Q
Sample Input 1
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
Sample Output 1
1 2 3 
4 5 6 
7 8 9 
10 11 12
Explanation of Sample 1

A = [a11 a12 a13 a14] = [1 2 3 4]
      [a21 a22 a23 a24]    [5 6 7 8]
      [a31 a32 a33 a34]    [9 10 11 12]
As given in problem statement, matrix A in 4 x 3 dimension becomes of the form :
[a11 a12 a13]
[a14 a21 a22]
[a23 a24 a31]
[a32 a33 a34]

Hence answer is :
[1 2 3]
[4 5 6]
[7 8 9]
[10 11 12]


*/

let arr = [[1,2,3], 
           [4,5,6], 
           [7,8,9], 
           [10,11,12]];

let m = arr.length;
let n = arr[0].length;
let a = [];
let p = 3;
let q = 4;
let new_arr = [];
for(let i = 0; i < p; i++) {
    new_arr[i] = [];
}
for(let i =0; i < m; i++) {
    for(let j = 0; j < n; j++) {
        a.push(arr[i][j]);
    }
}
console.log(a);
for(let i = 0; i < p; i++) {
    for(let j = 0; j < q; j++) {
        new_arr[i][j] = a.shift();
    }
}

console.log(new_arr);