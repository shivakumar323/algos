// problem on array
// given a two dimensional array print the elements of array in anti clockwise spiral spiral order
// this is same as previous problem but direction is opposite which is in anti clockwise direction

function spiral_order(arr) {
    let m = arr.length;
    let n = arr[0].length;
    let r = 0;
    let c = 0;
    let i = 0;
    
    while(r < m && c < n) {
        for(let i = n - 1; i >= c; i--) {
            console.log(arr[r][i]);
        }
        r++;
    
        for(let i = r; i < m; i++) {
            console.log(arr[i][c]);
        }
        c++;
        
        for(let i = c; i < n; i++) {
            console.log(arr[m - 1][i]);
        }
        m--;
    
        for(let i = m - 1; i >= r; i--) {
            console.log(arr[i][n - 1]);
        }
        n--;
    }
}

let arr = [[1,2,3,4,5,6],
           [7,8,9,10,11,12],
           [13,14,15,16,17,18],
           [19,20,21,22,23,24]];


spiral_order(arr);