//problem on array
/*
problem statement : 
Given a below two dimensional array:
    [1,2,3,4,5,6
     7,8,9,10,11,12
     13,14,15,16,17,18]

     print the elements in array in spiral order in clockwise direction (refer screenshot for more clarity on spiral order)

approach - from the start position keep traversing in straight direction until:
    1. you hit the boundary
    if you hit the boundary then change the direction in clockwise direction 90 degrees

    2. reach the already visited element
    ifyou reaach already visied element then change the direction clockwise 90 degrees
*/

function spiralprint(arr) {
    
    let m = arr.length; // no of rows
    let n = arr[0].length; // no of columns
    let r = 0; //starting row position
    let c = 0; // starting column position
    let i = 0; // this will be used as an iterator

    while(r < m && c < n) { // 

        for(i = c; i < n; i++) { //printing all the columns of top row, 1st row in our case
            console.log(arr[r][i] + ' ');
        }
        r++; // after printing all the elements of the row we are moving to next row

        for(i = r; i < m; i++) { // printing the last or right most column
            console.log(arr[i][n - 1] + ' ');
        }
        n--;  // since we are done with printing last column we will decrement it by 1
        
        
        for(i = n - 1; i >= c; i--) { // printing the bottom row
            console.log(arr[m - 1][i] + ' ');
        }
        m--; // when done printing the bottom row decrement it by 1
        
        
        
        for(i = m - 1; i >= r; i--) {
            console.log(arr[i][c] + ' ');
        }
        c++;     
        
        
    }

}

let arr = [[1,2,3,4,5,6],
           [7,8,9,10,11,12],
           [13,14,15,16,17,18],
           [19,20,21,22,23,24]];


spiralprint(arr);