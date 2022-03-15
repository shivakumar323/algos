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
/* in the above question 
    T represents => no of test cases // T test cases should get executed in 1 second. 
    N represents length of an array

    For each test case the input lines will be 3 (i.e., N, elements of array, Sum target). So if there are 10 test cases(T = 10) then total input lines will be 10 * 3 = 30 input lines
*/

