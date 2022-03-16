/*
Given a number n, print the first n natural numbers in descending order recurssively

for example if n = 5 then print 5 4 3 2 1

step 1 - base case: if n == 1: then we will print 1
step 2 - since we want to print in descending order we will do our task of printing n and then call the recurrence function 
that is we will print console.log(n) and then call find_numbers(n - 1)
recurrence function keeps on adding functions in function stack in bottom up approach
our task which is printing n will be done in bottom up approach along with each function call in recurrence function call. refer to screenshot for better understanding.
*/
function find_numbers(n) {
    if(n == 1) {
        console.log(1);
        return;
    }
    console.log(n);
    find_numbers(n - 1);
}

find_numbers(5);