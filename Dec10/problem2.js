// movement of a camel in chess board
/*
given a n * n matrix find out the position where a camel can travel from a given position (i, j)
*/
n = 4
A = [];
i = 2;
j = 2;
function f1(x, y) { // function to move camel to bottom right and bottom left directions
    if(x >= n || y >= n || x < 0 || y < 0) {
        x = i;
        y = j;
        return;
    }
    
    A.push(x, y);
    A.push(' ');
    
    f1(x + 1, y + 1);  // bottom right
    f1(x + 1, y - 1);  // bottom left
    //for some reason below two functions calls are resulting in maximum call stack size exceeded so gonna handle using f2 function
    //f1(x - 1, y + 1); // top right
    //f1(x - 1, y - 1); // top left
}
function f2(x, y) {  // function to move camel towards top right and top left directions
    if(x >= n || y >= n || x < 0 || y < 0) {
        x = i;
        y = j;
        return;
    }
    if(x != i && j != y) {  // to avoid duplicates in array A
        A.push(x, y);
        A.push(' ');
    }
    f2(x - 1, y + 1);  // top right
    f2(x - 1, y - 1);  // top left
}

f1(i, j);
f2(i, j);
console.log(A);

// Note: this is the optimized version of https://github.com/shivakumar323/algos/commit/459332a1e9c205feb782e64135a0cc9906a918c8

