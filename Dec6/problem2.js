// Little girl and maximum sum
//https://codeforces.com/problemset/problem/276/C
/*

The little girl loves the problems on array queries very much.

One day she came across a rather well-known problem: you've got an array of n elements (the elements of the array are indexed starting from 1); also, there are q queries, each one is defined by a pair of integers li, ri (1≤li≤ri≤n). You need to find for each query the sum of elements of the array with indexes from li to ri, inclusive.

The little girl found the problem rather boring. She decided to reorder the array elements before replying to the queries in a way that makes the sum of query replies maximum possible. Your task is to find the value of this maximum sum.

Input
The first line contains two space-separated integers n (1≤n≤2⋅105) and q (1≤q≤2⋅105) — the number of elements in the array and the number of queries, correspondingly.

The next line contains n space-separated integers ai (1≤ai≤2⋅105) — the array elements.

Each of the following q lines contains two space-separated integers li and ri (1≤li≤ri≤n) — the i-th query.

Output
In a single line print, a single integer — the maximum sum of query replies after the array elements are reordered.

Please, do not use the %lld specifier to read or write 64-bit integers in C++. It is preferred to use the cin, cout streams or the %I64d specifier.

Examples
inputCopy
3 3
5 3 2
1 2   => 1 to 2
2 3   => 2 to 3
1 3   => 1 to 3 (1st to 3rd index)
outputCopy
25
inputCopy
5 3
5 2 4 1 3
1 5
2 3
2 3
outputCopy
33

*/

//According to question you have to shuffle the input array in such a way that after shuffling you should be able to get the maximum possible sum for each query.
//Approach - find out the index which is asked most in the queries and place the maximum number in the array to that particular index and similarly for other indexes in the query.
//step 1 - create an array with all zeroes in it, length shoud be of same length as that of input array
//step 2 - for each query(L R) increment 1 for the Lth index and decrement by -1 for R + 1 th index for the array created in the above step.
// step 3 - find prefix sum for the above processed array.
//step 4 - sort the above processed array.
//step 5 - sort the input array.
//step 6 - find sum by running loop on both the arrays by adding ith term of arrays 
//time complexity will be - O(q) for q queries to create empty array, O(n) for finding prefix sum, O(nlogn) for sorting both the arrays 
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
process.stdin.on('data', function(userInput) {
    inputString += userInput;
});

process.stdin.on('end', function(x) {
    inputString.trim();
    inputString = inputString.split('\n');
    main();
})

let currentLine = 0;
function readLine() {
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
    let line1 = processArray(readLine());
    let N = line1[0];
    let T = line1[1];

    let arr = processArray(readLine());

    let emp_arr = [];
    for(let i = 0; i < N; i++) {
        emp_arr.push(0);
    }
    
    for(let i = T; i > 0; i--) {
        let q = processArray(readLine());
        let L = q[0] - 1;
        let R = q[1] - 1;

        emp_arr[L] += 1;
        if(R <= N - 2) {
            emp_arr[R + 1] -= 1;
        }
    }

    for(let i = 1; i < N; i++) {
        emp_arr[i] = emp_arr[i - 1] + emp_arr[i]; 
    }
    
    emp_arr.sort((a, b) => a - b); // sorting the index array
    arr.sort((a, b) => a - b); // sorting the input array

    let sum = 0;
    for(let i = 0; i < N; i++) {
        sum += emp_arr[i] * arr[i];
    }

    console.log(sum);
    
}