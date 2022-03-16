/*
Given a number n, print the first n natural numbers in ascending order recurssively

for example if n = 5 then print 1 2 3 4 5

step 1 - base case: if n == 1: then we will print 1
step 2 - since we want to print in ascending order we will call the recurrence function first and then we will do our task 
that is we will call find_numbers(n - 1) and then console.log(n)
recurrence function keeps on adding functions in function stack in bottom up approach
our task which is printing n will be done in top down approach. refer to screenshot for better understanding.

*/
function find_numbers(n) {
    if(n == 1) {
        console.log(1);
        return;
    }
    find_numbers(n - 1);
    console.log(n);
}

find_numbers(5);