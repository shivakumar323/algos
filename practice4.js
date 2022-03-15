/*
title - target-sum-pair

Given an integer array of N elements which is sorted in non-decreasing order. 
you are given a target value T, find a pair of elements in the array such that 
the sum of pair equals to T.
ex:-
input : [1, 2, 5, 6, 7, 9]  T = 8
output should be:
[1, 7] or [2, 6]

Brute force:-
    Try to make all possible pairs i.e., if input array is [a, b, c, d] we will start iteration from first element in an array.
    for a we will loop from b to d i.e., b, c, d   => n-1 iterations
    for b we will loop from c to d i.e., c, d      => n-2 iterations
    and so on                                      => 1 iterations
    (n-1) + (n-2) + ..... + 1 = n(n-1) / 2  => n * n operations

approach:- 
    step1:- let i be indicating 1st elemrnt of array
            let j be indicating last element of array
    step2:- we will loop through the array until i <= j
    step3:- if array[i] + array[j] == T:
            then print(array[i], array[j])
            else if array[i] + array[j] < T:
            then i = i+1
            else
            j = j-1
*/ 

let arr = [1, 2, 3, 8, 16, 22, 34, 5, 6, 7];
let arr1 = [];
let i = 0;
let target = 8;
let j = arr.length - 1;
arr.sort(function(a, b){return a - b}); // sort function to sort the array. return b-a is used to sort the array in descending order
//console.log(arr); // output = [1, 2,  3,  5,  6, 7, 8, 16, 22, 34]
while(i < j){
    if(arr[i] + arr[j] == target){
        arr1.push([arr[i], arr[j]]);
        i += 1
        
    }
    else if(arr[i] + arr[j] < target){
        i += 1;
    }
    else{
        j -= 1
    }
}
console.log(arr1);
console.log('number of pairs found are: ', arr1.length);
