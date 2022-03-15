
/**
 Question - Given an array of all zeroes and length n. 
 you will get q queries, in each query you get 2 numbers 'L' and 'R'.
 for each query increment by 1 the values for all array indexes in the range L to R
 after processing all queries, print array. 
 */

 // approach - find  prefix sum instead of bruteforce
 //for each query increment the value at L by 1 at and at R+1 decrement by 1. and finally do a prefix sum for the obtained array. 
 a = [0,0,0,0,0];
 function fun1(a, L, R) {
    a[L] += 1;
    if(R < a.length - 1) {
       a[R + 1] -= 1;
    }

    for(let i = 0; i < a.length; i++) {
        if(i > 0) {
            a[i] = a[i] + a[i - 1];
        }
    }
    return a;
 }

 console.log(fun1(a, 2, 3));
 console.log(fun1(a, 2, 3));
