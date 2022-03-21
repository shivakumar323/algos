// printing pattern recuresively without using loop.
/*
for n = 5, print the following pattern recuresively
*****
****
***
**
*
*/

function f(row,col,n) {
    if(row < 1) {
        return;
    }

    if(col > row) {
        process.stdin.write("\n");
        f(row-1, 1, n);
        return;
    }

    else {
        process.stdin.write("* "); //used to print continuous *'s in a single row
        f(row, col+1, n);
    }
}

f(5,1,5);