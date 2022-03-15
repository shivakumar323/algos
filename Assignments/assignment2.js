/*
Find a triplet that sum to a given value
Problem Statement: Given an array A and a value V, find if there is a triplet in the array whose sum is equal to the given value. If there are many such triplets, print the smallest possible triplet. Also print the elements of the triplets in increasing order.

Constraints 1 ≤ T ≤ 10 1 ≤ N ≤ 100 (length of array) 1<=V<=3104 1<=Ai<=104

Input Format: First line contains an integer T, denoting number of test cases. Next line is the length of the array, the next line is the array of integers and the next line is the sum target.

Output format: Output will be the set of Triplets whose sum is equal to given value. If there are no such triplets, output will be -1.

Sample Input: 2 6 1 4 45 6 10 8 22 6 12 3 4 1 6 9 24

Sample output: 4 8 10 3 9 12

Explanation: 4+8+10=22 which is equal to the given value of sum. Also, 12+3+9 equals to 24 This method uses sorting to increase the efficiency of the code.

By Sorting the array, the efficiency of the algorithm can be improved. This efficient approach uses the two-pointer technique. Traverse the array and fix the first element of the triplet. Now use the Two Pointers algorithm to find if there is a pair whose sum is equal to x – array[i]. Two pointer algorithms take linear time so it is better than a nested loop.
*/ 

function find_triplet_to_find_sum(A,N){
    A.sort(function(a, b){return a - b});
    let arr1 = [];
    let target = 22;
    let j = N - 1;
    for(let i = 0; i < N - 2; i++){
        let a1 = A[i];
        target_sub = target - a1;    
        
        k = i + 1;
        while(k < j){
            if(A[k] + A[j] == target_sub){
                arr1.push(A[i], A[k], A[j]);
                k += 1;
            } 
            else if(A[k] + A[j] < target_sub){
                k += 1;
            }
            else{
                j -= 1;
            }
        }
    }
    return arr1;
}

console.log(find_triplet_to_find_sum([2, 6, 1, 4, 45, 6, 10, 8, 22, 6, 12, 3, 4, 1, 6, 9, 24], 17))