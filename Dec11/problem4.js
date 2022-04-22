// printing elements of a matrix in diagonal order also called as zig zag traversal
// Given a matrix print the elements of a matrix in diagnol fashion refer to attached screensot


let arr = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
           [13,14,15,16],
           [17,18,19,20]];


function diagonal_print(arr) {
    let m = arr.length;
    let n = arr[0].length;
    let r = 0;
    let c = 0;
    let i = 0;

    for(i = r; i < m; i++) {
        f(arr, i, c);
    }
    for(i = c + 1; i < n; i++) {
        f(arr, m - 1, i);
    }
}

// the below function is similar to camel's movement in chess board diagram
//https://github.com/shivakumar323/algos/blob/master/Dec10/problem2.js
function f(arr, x, y) {  // function to move camel towards top right direction
    m = arr.length;
    n = arr[0].length;
    if(x >= m || y >= n || x < 0 || y < 0) {
        return;
    }
    console.log(arr[x][y]);
    f(arr, x - 1, y + 1); // top right
    //console.log(arr[x][y]);  // uncommeent this line and remove line 33 in order to print diagnoal elements in opposite direction
    
}


//if you dont want to use recurssion like in function f() in above method you can use below code
// function diagonal_print(arr) {
//     let r = arr.length;
//     let c = arr[0].length;

//     for(var k = 0; k < r; k++) {
//         console.log(arr[k][0]);

//         var i = k - 1; // row above it
//         var j = 0 + 1; // next column

//         while(isValid(i, j, arr)) {
//             console.log(arr[i][j]);
//             i--; // moving up
//             j++; // moving right
//         }

//     }
//     for(var k = 1; k < c; k++) {  // this is to print last row elements
//         console.log(arr[r - 1][k]);

//         var i = r - 2;
//         var j = k + 1;

//         while(isValid(i, j, arr)) {
//             console.log(arr[i][j]);
//             i--;
//             j++;
//         }
//     }
// }

// function isValid(i, j, arr) {
//     if(i < 0 || i >= arr.length || j < 0 || j >= arr[0].length) {
//         return false;
//     }
//     return true;
// }

diagonal_print(arr);