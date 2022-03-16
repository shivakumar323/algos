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
*/
