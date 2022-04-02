/*
Given a String str, print all possible permutation(rearrangements) of str 
ex - str = "abc"
abc
acb
bac
bca
cab


Approach - consider one element for ex a, in input str find permutations of all the letters except a and append a for all those permutations
in abc consider a, permutations for rest elements i.e., permutations for b,c will be 
bc, cb
so now if we append a to the above permutations then we will get abc, acb
similarly if we consider b from abc then the permutaions will be 
appending b to ac,ca  => bac, bca
simlarly for c, 
we will get cab, cba

to consider all the elements i.e., in abc we will consider the first element which is a and then 
we will find permutations for rest elemrnts and later we will be appending a to them
next as we are supposed to consider b, in order to consider  b we will swap b with a.
*/

function f(str, i) {
    if(i == str.length - 1) {
        console.log(str);
        return;
    }

    for(let j = i; j < str.length; j++) {
        swap(str, i, j);

        f(str, i+1);

        swap(str, i, j);
    }
}

function swap(str, m, n) {
    let temp = str[m];
    str[m] = str[n];
    str[n] = temp;
}

let str = ['a', 'b', 'c'];  /* we are sending string abc in char array because 
since stings are immutable in js when we pass this string in swap function string remains unchanged(pass by value, copy of string is sent into swap function), 
so we are passing it in the form of array(pass by reference, array itself is sent )
*/

f(str, 0);