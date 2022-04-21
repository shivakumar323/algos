// problem on array
// given a two dimensional array print the elements of an array in such a way that 
//print row 1 with left to right 
//print 2nd row in right to left direction
// print 3rd row in left to right direction
//and so on

function f(arr) {
    let r = 0;
    let c = 0;
    let i = 0;
    let m = arr.length;
    let n = arr[0].length;

    while(r < m && c < n) {

        for(i = c; i < n; i++) {
            console.log(arr[r][i]);
        }
        r++;

        for(i = n - 1; i >= c; i--) {
            console.log(arr[r][i]);
        }
        r++;
    }
}

let arr = [[1,2,3,4,5,6],
           [7,8,9,10,11,12],
           [13,14,15,16,17,18],
           [19,20,21,22,23,24]];

f(arr);