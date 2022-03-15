/*
GCD - greatest common divisor
GCD of the array
● Problem Statement: Given an array A of N elements, your task is to determine the gcd of all elements in the array.
● A = [12, 15, 24, 9]
● Output: 3
*/

//euclidian algorithm to find gcf of a given two numbers a,b 
function gcd(a, b) {
    while(b > 0) {
    	let remainder = a % b;
    	a = b;
    	b = remainder;
    }
    return a;
}
 
function gcdOfArray(nums) {
    let ans = nums[0];
    for(let num of nums) {
        ans = gcd(ans, num);
    }
    return ans;
}
 
console.log(gcdOfArray([12, 15, 24, 9]));