/*
Find the smallest positive number missing from an unsorted array.
Problem Statement: Given an unsorted array A of length N, with both positive and negative elements, find the smallest positive number missing from the array.

Constraints: 1 ≤ T ≤ 10 1<=N<=104 -N <= A[i] <= N Solve the problem in O(n) time using constant extra space. You can modify the original array.

Input Format: First line contains an integer T, denoting number of test cases. Next line contains the length of the array and the next line is an array of integers which contains both positive and negative elements.

Output format: Output will be a positive number missing from the array.

Sample Input: 2 8 2 3 -7 6 8 1 -10 15 5 1 1 0 -1 -2

Sample output: 4 2

Explanation: The smallest positive integer is 1. First we will check if 1 is present in the array or not. If it is not present, then 1 is the answer.

If present then, again traverse the array. The largest possible answer is N+1 where N is the size of an array. This will happen when the array has all the elements from 1 to N. When we are traversing the array, if we find any number less than 1 or greater than N, then we will change it to 1. This will not change anything as the answer will always be between 1 to N+1. Now our array has elements from 1 to N.

Now, for every ith number, increase arr[ (arr[i]-1) ] by N. But this will increase the value more than N. So, we will access the array by arr[(arr[i]-1)%N]. What we have done is for each value we have increased value at that index by N.

We will find now which index has a value less than N+1. Then i+1 will be our answer.
*/

function find_smallest_missing_no(A,N){
    A.sort(function(a, b){return a - b}); // sorting A in ascending order
    for(let i = 0; i < N; i++){
        if(A[i] <= 0 || A[i] > N){
            A[i] = 1;
        }
    }
    let x = 0;
    for(let j = 1; j <= N; j++){
        if(A.includes(j)){
            continue;
        }
        else{
            x = j;
            break;
        }
    }
    return x;
}

console.log(find_smallest_missing_no([1,1,0,-1,2], 5));
