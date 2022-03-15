/*
Two Sum Problem
● Problem Statement: Given an array A of N elements that are sorted in nondecreasing order. Additionally we have been
provided a target. Find two indices in the array (i, j) such that i < j and A[i] + A[j] = target.
● A = [1, 2, 5, 6, 9], N = 5, target = 8
● Output: [1, 3]
*/

let arr = [1, 2, 3, 8, 16, 22, 34, 5, 6, 7];
let arr1 = [];
let arr2 = [];
let i = 0;
let target = 8;
let j = arr.length - 1;
arr.sort(function(a, b){return a - b}); // sort function to sort the array. return b-a is used to sort the array in descending order
//console.log(arr); // output = [1, 2,  3,  5,  6, 7, 8, 16, 22, 34]
while(i < j){
    if(arr[i] + arr[j] == target){
        arr1.push([arr[i], arr[j]]);
        arr2.push([i,j]);
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
console.log(arr2);
console.log('number of pairs found are: ', arr1.length);

//optimal solution 
/*
function twoSum(A, N, target) {
    let low = 0, high = N - 1;
    while(low < high) {
        if(A[low] + A[high] < target) low++;
        else if(A[low] + A[high] > target) high--;
        else return [low, high];
    }
 
    return [-1, -1];
} 
 
console.log(twoSum([1, 2, 5, 6, 9], 5, 8));
console.log(twoSum([1, 2, 5, 6, 9], 5, 12));
*/
