let n = 3;
let A = [];
let i = 3;
let j = 3;
let count = 1;  

function f(x, y) {  // function to move camel towards top right and top left directions
    if(x > n || y > n || x < 0 || y < 0) {
        x = i; // bringing back camel to its original position
        y = j;
        count++; // count represents direction here, after reaching border or end point we are changing the direction
        f(x, y);
        return;
    }
    if(x != i && y != j) {  // to avoid duplicates in array A
        A.push(x, y);
        A.push(' ');
    }
    if(count == 1) {
        f(x - 1, y - 1);  // top left
    }
    if(count == 2) {
        f(x - 1, y + 1); // top right
    }
    if(count == 3) {
        f(x + 1, y - 1); // bottom left
    }
    if(count == 4) {
        f(x + 1, y + 1); // bottom right
    }
}

f(i, j);
console.log(A);