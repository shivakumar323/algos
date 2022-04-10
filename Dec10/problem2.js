// movfement of a camel in chess board
/*
given a n * n matrix find out the position where a camel can travel from a given position (i, j)
*/
n = 4
A = [];
i = 2;
j = 2;
function f1(x, y) { // function to move camel to bottom right direction 
    if(x >= n || y >= n || x < 0 || y < 0) {
        return;
    }
    A.push(x, y);
    A.push(' ');
    
    f1(x + 1, y + 1);
}
function f2(x, y) {  // function to move camel towards bottom left
    if(x >= n || y >= n || x < 0 || y < 0) {
        return;
    }
    if(x != i && j != y) {
        A.push(x, y);
        A.push(' ');
    }
    f2(x + 1, y - 1);
}

function f3(x, y) { // function to move camel towards top right direction
    if(x >= n || y >= n || x < 0 || y < 0) {
        return;
    }
    if(x != i && j != y) {
        A.push(x, y);
        A.push(' ');
    }
    f3(x - 1, y + 1);
}

function f4(x, y) {  // function to move camel towards top left direction
    if(x >= n || y >= n || x < 0 || y < 0) {
        return;
    }
    if(x != i && j != y) {
        A.push(x, y);
        A.push(' ');
    }
    f4(x - 1, y - 1);
}

f1(i, j);
f2(i, j);
f3(i, j);
f4(i, j);
console.log(A);
