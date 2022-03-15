// Link for question - https://codeforces.com/problemset/problem/676/C
/* 
High school student Vasya got a string of length n as a birthday present. This string consists of letters 'a' and 'b' only. Vasya denotes beauty of the string as the maximum length of a substring (consecutive subsequence) consisting of equal letters.

Vasya can change no more than k characters of the original string. What is the maximum beauty of the string he can achieve?

Input
The first line of the input contains two integers n and k (1 ≤ n ≤ 100 000, 0 ≤ k ≤ n) — the length of the string and the maximum number of characters to change.

The second line contains the string, consisting of letters 'a' and 'b' only.

Output
Print the only integer — the maximum beauty of the string Vasya can achieve by changing no more than k characters.

Examples
inputCopy
4 2
abba
outputCopy
4
inputCopy
8 1
aabaabaa
outputCopy
5
Note
In the first sample, Vasya can obtain both strings "aaaa" and "bbbb".

In the second sample, the optimal answer is obtained with the string "aaaaabaa" or with the string "aabaaaaa".


*/

// approach used is expanding and shrinking window.

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = "";

process.stdin.on('data', function(userInput) {
    inputString += userInput;
});

process.stdin.on('end', function(x) {
    inputString.trim();
    inputString = inputString.split('\n');
    main();
});

let currentLine = 0;
function readline() {
    let result = inputString[currentLine];
    currentLine++;
    return result;
}

function processArray(arr) {
    let temp = arr.split(' ');
    let result = [];
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i]));
    }
    return result;
}

function main() {
    let a = processArray(readline());
    let N = a[0];
    let K = a[1];

    let s = readline();
    s1 = s.split('');
    //console.log(s1);
    console.log(get_max_len(s1, 2, 'a'));
    console.log(get_max_len(s1, 2, 'b'));
    let l1 = get_max_len(s1, 2, 'a');
    let l2 = get_max_len(s1, 2, 'b');
    if(l1 > l2) {
        console.log(l1);
    }
    else {
        console.log(l2);
    }
}
function get_max_len(arr, k, char) {
    let ans = 1;
    let start = 0;
    let end = 0;

    while(end < arr.length) {
        let count = 0;
        if(arr[end] == char) {
            count = end - start + 1;
            end++;
        }
        else {
            if(k > 0) {
                k--;
                count = end - start + 1;
                end++;
            }
            else {
                while(k < 0) {
                    if(arr[start] == char) {
                        start++;
                    }
                    else {
                        start++;
                        count = end - start + 1;
                        end++;
                        k++;
                    }
                }
            }
        }
        if(count > ans) {
            ans = count;
        }
    }
    return ans;
}