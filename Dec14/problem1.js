// find a minumum number of an array using recurssion

let arr = [3,1,2,4];
let min = arr[0];
function f(arr, i) {
    if(i >= arr.length) {
        return
    }
    if(min > arr[i]) {
        min = arr[i];
    }

    f(arr, i + 1);

    return min;
}

console.log(f(arr, 0));