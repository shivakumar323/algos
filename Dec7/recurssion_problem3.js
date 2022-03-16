// Lexicographical Numbers
/*
lexicographical order means alphabetical order in a dictionary.
for example in dictionary words will be arranged like a, aab, ab, ac, ad, b, ba, bb and so on 
similar order can be defined to numbers as well which is called as lexicographical order on numbers
in order to define this order on numbers the below logic is used.

each alphabet will be mapped to one number in following manner
a -> 0
b -> 1
c -> 2
and so on

so for 10 -> ba
11 -> bb
and so on

example 1: 
input: n = 13
output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
explanation: [b,ba,bb,bc,bd,c,d,e,f,g,h,i,j]

example 2:
input: n = 2
output: [1,2]
explanation: [b,c]

Note: solve this problem recursively since we are learning recurssion.

Approach:- step1:- lets define a function with two parameters which are start = 0 and n
step2:- we will print 0 first
step3:- we will print 1 and then we will print all the numbers starting with 1 up to number n ex: 10,100,1000,11,110,12,120, and so on
and similarly for 2, 3 and so on till 9
step4:- recurssive assumption: f(10 * start + i) for all i belonging to 0 to 9


*/

function f(start, n) {
    if(start > n) {
        return
    }
    console.log(start);

    if(start == 0) {
        for(let i = 1; i <= 9; i++) {
            f(10 * start + i, n);
        }
    }
    else {
        for(let i = 0; i <=9; i++) {
            f(10 * start + i, n);
        }
    }
}

f(0,13);

