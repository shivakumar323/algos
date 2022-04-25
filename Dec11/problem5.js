// this is same question as previous problem that is printing elements of a matrix in daigonal order
// but this time we are going to solve it using a logic below
/*
logic:
if the matrix is :
    [[1,2,3,4],
     [5,6,7,8],
     [9,10,11,12],
     [13,14,15,16]]

and the index of each element will be: 
    [[0,0], [0,1], [0,2], [0,3],
     [1,0], [1,1], [1,2], [1,3],
     [2,0], [2,1], [2,2], [2,3],
     [3,0], [3,1], [3,2], [3,3]]

sum of indexes matrix will look like: if you add i, j of  each index
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6]

if you carefully observe from the above matrixs, you can find that each diagnoal array represents unique sum of indexes
for ex: 0th diagonal array [1] has the sum of indexes as 0
        1st diagonal array [5, 2] has the sum of indexes as 1
        and so on 

*/

let arr = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
           [13,14,15,16]];

let m = arr.length;
let n = arr[0].length;

let l = m + n - 1;
let a = [];
for(let i = 0; i < l; i++) {
    a.push([]);
}
for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
        let sum = i + j;
        a[sum].unshift(arr[i][j]); // unshift method is used to append the element at the beginning of an array
    }
}
console.log(a);

