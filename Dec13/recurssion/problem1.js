/*
problem statement: There are 3 tables. S, D and H. S initially has n coins 
arranged in the decreasing order of diameter. 
Bottom coin has highest diameter and top has smallest. 
Move all the coins from S to D using H , with following conditions in mind : 
1. Only one coin can be moved at a time 
2. Only smaller coin can be kept over the bigger one and not vice-versa. 
How many moves will be needed to move n coins from S to D .

refer to screenshots for more clarity on problem
*/
// s - start, d - destination, a - auxillary or helper, n - no of elements
// no of moves to move n coins from s to d using a
function moves(s, d, a, n) {

    // base condition
    if(n == 1) { // if one coin then one step needed
        return 1;
    }

    // 
    // let's try to reduce problem size
    // let's try to move n - 1 coins to a first
    moves1 = moves(s, a, d, n - 1);

    // one step to move the remaining largest element from s to d

    // move the n - 1 coins which are on a to d finally
    moves2 = moves(a, d, s, n - 1);

    return moves1 + 1 + moves2;

}

console.log(moves('s', 'd', 'a', 1));  // 1
console.log(moves('s', 'd', 'a', 2));  // 3
console.log(moves('s', 'd', 'a', 3));  // 5
console.log(moves('s', 'd', 'a', 4));  // 7
console.log(moves('s', 'd', 'a', 5));  // 9
