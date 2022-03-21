// printing pattern recuresively without using loop.
/*
for n = 5, print the following pattern recuresively
*
**
***
****
*****
*/
/*
based on 1st recurssion problem
function f(n) {
    if(n == 1) {
        console.log('*');
        return;
    }
    f(n - 1);
    //console.log(n);
    let x = '* ';
    for(let i = 1; i < n; i++) {
        x += '* ';
    }
    console.log(x);
}

*/

function f(row, col, n) {
    if(row > n) {
        return;
    }
    if(col > row) {
        process.stdin.write("\n");
        f(row+1, 1, n);
        return;
    }
    else {
        process.stdin.write("* "); //used to print continuous *'s in a single row
        f(row, col+1, n);
    }
}

f(1, 1, 5);