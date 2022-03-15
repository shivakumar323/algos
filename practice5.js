
/*
Given an array of N elements and a value K, Rotate the array K times.
In one rotation we shift the right most element to the start of array
print the final array after K rotations

brute force:-
step1:- reverse the array
step2:- grouping of array elements for up to K elements i.e., break array in to two parts 1st part should contain from 0th element to up to K elements, 2nd part should contain from Kth element to last element
step3:- reverse both the groups 
*/


// let arr = [1,2,3,4,5];
// let K = 3;

// let i = 0;
// let j = arr.length - 1;
// while(i <= j){
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i += 1;
//     j -= 1;
// } 
// //console.log(arr); // output: [ 5, 4, 3, 2, 1 ]
// i = 0;
// j = arr.length - 1;
// while(i <= K - 1 ){
//     temp = arr[i];
//     arr[i] = arr[K - 1];
//     arr[K - 1] = temp;
//     i += 1;
//     K -= 1;
// }
// //console.log(arr); // output: [ 3, 4, 5, 2, 1 ]
// //console.log(i, j, K); // output: 2 4 1
// i += 1;
// while(i <= j){
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i += 1;
//     j -= 1;
// }
// console.log(arr); // output: [ 3, 4, 5, 1, 2 ]

function rotate(arr, start, end){
    let i=  start;
    j = end;
    while(i <= j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i += 1;
        j -= 1;
    }
}

let arr = [1,2,3,4,5];
let k = 3;
rotate(arr, 0, arr.length - 1);
//console.log(arr); // output: [ 5, 4, 3, 2, 1 ]

rotate(arr, 0, k - 1);
//console.log(arr); // output: [ 3, 4, 5, 2, 1 ]

rotate(arr, k, arr.length - 1);
console.log(arr); // output: [ 3, 4, 5, 1, 2 ]


