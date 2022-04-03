// this question is continued version of previous question i.e., dec 8th recurssion_problem2.js
/*
Question - given a input string str print all possible permutations of str but you shouls also handle duplicate values in str
i.e., this time input can not only be abc but it can also be aba


Approach:-
we will maintain an array arr of 26 length where all the elements in that array will be f(false) initially and each element repedents each alphabet i.e., first element in array represents a, second b and so on 
for each element from the beginning in input string str we will check if the element's corresponding element in array arr i.e., if element is a then we will check for 0th index of arr if it is f then we will continue to find permutations and update it to t(true) else we will skip or break and go to next letter in str

now to update arr with proper index i.e,, to find index number from alphabet in str we will be using adcii values
method which is used to find an ascii value of an alphabet or char is:
charCodeAt(index)
syntax: text.charCodeAt(index)
ex: if str = abc
then str.charCodeAt(0) will return 97 => ascii value of a is 97
similarly str.charCodeAt(1) will return 98 and so on
in order to get 0 for a, 1 for b and so on, we have to substract 97 from charCodeAt() method
i.e., str.charCodeAt(0) - 97 = 0
      str.charCodeAt(1) - 97 = 1
*/

function f(str, i) {
    if(i == str.length - 1) {
        console.log(str);
        return;
    }
    
    let arr = Array(26).fill(false) // shortcut used in js to create an array arr with length 26 and fill the array with all elements as false i.e., [false, false, and so on up to 26th element]

    for(let j = i; j < str.length; j++) {
        let currentChar = str[j];
        if(arr[currentChar.charCodeAt(0) - 97] == false) {
            arr[currentChar.charCodeAt(0) - 97] = true;

            swap(str, i, j);

            f(str, i+1);

            swap(str, i, j);
        }
        
    }
}

function swap(str, m, n) {
    let temp = str[m];
    str[m] = str[n];
    str[n] = temp;
}

let str = ['a', 'b', 'a'];  /* we are sending string abc in char array because 
since stings are immutable in js when we pass this string in swap function string remains unchanged(pass by value, copy of string is sent into swap function), 
so we are passing it in the form of array(pass by reference, array itself is sent )
*/

f(str, 0);

/*
output:
when input = ['a', 'b', 'a']
[ 'a', 'b', 'a' ]
[ 'a', 'a', 'b' ]
[ 'b', 'a', 'a' ]

when input = ['a', 'b', 'c']
[ 'a', 'b', 'c' ]
[ 'a', 'c', 'b' ]
[ 'b', 'a', 'c' ]
[ 'b', 'c', 'a' ]
[ 'c', 'b', 'a' ]
[ 'c', 'a', 'b' ]

*/
