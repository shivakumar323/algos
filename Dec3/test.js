let arr = [[1,2,3],
           [7,8,9],
           [13,14,15],
           [19,20,21]];


function spiralprint(arr) {
    let m = arr.length;
    let n = arr[0].length;
    let r = 0;
    let c = 0;

    let i = 0;

    while(r < m && c < n) {

        for(i = c; i < n; i++) {
            console.log(arr[r][i]  + ' ');
        }
        r++;

        for(i = r; i < m; i++) {
            console.log(arr[i][n - 1] + ' ');
        }
        n--;
        
        console.log('r:' + r + 'm:' + m);
        
        for(i = n - 1; i >= c; i--) {
            console.log(arr[m - 1][i] + ' ');
        }
        m--;
        
        console.log('r:' + r + 'm:' + m);
        for(i = m - 1; i >= r; i--) {
            console.log(arr[i][c] + ' ');
        }
        c++;
        
    } 
}

spiralprint(arr);