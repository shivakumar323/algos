n = 3;
A = [];
i = 3;
j = 0;


function f2(x, y) {  // function to move camel towards top right and top left directions
    if(x > n || y > n || x < 0 || y < 0) {
        x = i;
        y = j;
        return;
    }
    if(x != i && y != j) {  // to avoid duplicates in array A
        A.push(x, y);
        A.push(' ');
    }
    f2(x - 1, y - 1);  // top left
    //f2(x - 1, y + 1);  // top right
    if((x == i) && (y == j)) {
        f2(x - 1, y + 1);
    }
    
}

f2(i, j);
console.log(A);