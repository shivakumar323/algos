//rat maze - from codechef
/*
recurrsion problem
Problem Code: BPHC03

Story: You have to find a path through which the rat move from the starting position (0,0) to the final position where cheese is (n,n). 
List the total no of possible paths which the rat can take to reach the cheese.

Input
A file whose first line contains the size of the square maze The next n lines contain n binary values separated by space. 
0 denotes an open cell while 1 denotes a blocked cell. You have to find paths which contain only cells which are open, and finally print the total no of such unique paths. 
Retracing the 1 or more cells back and forth is not considered a new path. The set of all cells covered in a single path should be unique from other paths

Output
The output should be the total no of paths possible on the first line

Example
Input: 
7
0 0 1 0 0 1 0
1 0 1 1 0 0 0
0 0 0 0 1 0 1
1 0 1 0 0 0 0 
1 0 1 1 0 1 0
1 0 0 0 0 1 0
1 1 1 1 0 0 0



Output:
4

Note: rat can move in 4 directions that is top, bottom, left and right
0 denotes open cell while 1 denotes blocked cell
*/
let n = 7;
let grid = [[0 ,0 ,1 ,0 ,0 ,1 ,0], 
            [1 ,0 ,1 ,1 ,0 ,0 ,0], 
            [0 ,0 ,0 ,0 ,1 ,0 ,1], 
            [1 ,0 ,1 ,0 ,0 ,0 ,0], 
            [1 ,0 ,1 ,1 ,0 ,1 ,0], 
            [1 ,0 ,0 ,0 ,0 ,1 ,0], 
            [1 ,1 ,1 ,1 ,0 ,0 ,0]]; 

let visited = []; 
for(let i = 0; i < n; i++) {
    visited.push(Array(n).fill(false));
}

function f(x, y) {
    if(x < 0 || y < 0 || x >= n || y >= n) {  // condition for outside the grid 
        return 0;  // we should not do it
    }
    if(visited[x][y] == true) {
        return 0; // we should not go an already visitd cell 
    }
    if(grid[x][y] == 1) {  // blocked cell
        return 0; // we should not go here  
    }
    if(x == n - 1 && y == n - 1) {  // if we reach destination then we have to increment no of path
        return 1;
    }

    visited[x][y] = true;
    
    let up = f(x - 1, y);
    let left = f(x, y - 1);
    let down = f(x + 1, y);
    let right = f(x, y + 1);

    visited[x][y] = false; // may be x,y can be used by some other paths 

    return up + left + down + right;

}

console.log(f(0, 0));