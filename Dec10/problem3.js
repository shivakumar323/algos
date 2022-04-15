// https://en.wikipedia.org/wiki/Knight%27s_tour
//problem on knight tour
// given a n * n grid, by placing a knight at any particular position initially, 
//you have to find can knight touch all the cells in a grid at least once by travelling in its direction
// note knight can travel in 8 directions
// you have to return true if it can touch all the cells else return false
//hint think in the way you solved problem1.js on dec 10th.

let n = 5;
let visited = []; 
for(let i = 0; i < n; i++) {
    visited.push(Array(n).fill(false));
}

function f(x, y, count) {
    if(x < 0 || y < 0 || x >= n || y >= n) return false;
    if(visited[x][y] == true) return false;
    if(count == n * n) return true;  // if knight has touched all the cells(n*n) then return true
    
    let result = false;
    visited[x][y] = true;

    result = result || f(x + 1, y + 2, count + 1); // we are incrementing the count for each move
    result = result || f(x + 2, y + 1, count + 1);
    result = result || f(x + 1, y - 2, count + 1);
    result = result || f(x + 2, y - 1, count + 1);
    result = result || f(x - 1, y + 2, count + 1);
    result = result || f(x - 1, y - 2, count + 1);
    result = result || f(x - 2, y + 1, count + 1);
    result = result || f(x - 2, y - 1, count + 1);

    visited[x][y] = false;

    return result;
}

for(let i = 0; i < n; i++) {  // we are using two for loops to consider each cell as a starting point of knight 
    for(let j = 0; j < n; j++) {
        visited = [];
        for(let k = 0; k < n; k++) {
            visited.push(Array(n).fill(false));
        }
        if(f(i, j, 1) == true) {
            console.log("yes found one path");
            break;
        }
    }
}

f(0, 0, 1);