/*
Remove Duplicates from Sorted Array
● Problem Statement: Given an array A of N elements that is sorted in nondecreasing order. Remove all duplicates from
it.
● A = [1, 2, 5, 6, 91, 2, 2, 3, 4, 5, 5, 5, 5, 6, 6, 6], N = 12
● Output: [ 1, 2, 3, 4, 5, 6]
*/

function removeDuplicates(A, N){
    A.sort(function(a,b){return a - b}); // sorting in increasing order use b-a for decreasing order
    x = A[0];
    for(let j = 1; j <= A.length - 1;j++){
        if(A[j] == x){
            A.splice(j, 1); // slice method in js is used to remove an element/elements from an array ((j, 1) => from jth position remove 1 element in our case)
            j -= 1;
        }
        else{
            x = A[j];
        }
    }
    return A;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 5, 6, 6], 10));