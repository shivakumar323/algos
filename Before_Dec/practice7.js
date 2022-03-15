//Array Rotation
/* ● Problem Statement: Given an array A of N elements, right rotate the array K times.
● A = [1, 2, 3, 4, 5], N = 5, K = 3
● Output: [3, 4, 5, 1, 2]
[1, 2, 3, 4, 5] ====> [5, 1, 2, 3, 4] ====> [4, 5, 1, 2, 3] ====> [3, 4, 5, 1, 2]
*/
function rotate(nums, n, k) {
	if(k <= 0) return;
	k = k % n; 
    console.log(k); // 5 * 0 = 0 + 3(reminder)
	const aux = [];
    for (let i = 0; i < k; i++) {
        aux[i] = nums[n - k + i];
    }
 
    for (let i = n - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
 
    for (let i = 0; i < k; i++) {
        nums[i] = aux[i];
    }
}
 
const nums = [1, 2, 3, 4, 5];
rotate(nums, 5, 3);
console.log(nums);
