/*

------*
----* * *
--* * * * *
* * * * * * *
4
--* * * * *
----* * *
------*

*/

let i = 7;
let row = 0;
while(row <= Math.floor(i / 2)){
    let result = "";
    let spaces = 0;
    while(spaces < (i - (2 * row + 1))){
        result = result + '-';
        spaces += 1;
    } 

    let stars = 0;
    while(stars < (2 * row + 1)){
        result += '* ';
        stars += 1;
    }
    console.log(result);
    row += 1;
}
console.log(row);
let x = 0;
while(row < i){
    let spaces = 0;
    result = "";
    while(spaces < (2 * row + 1 - i)){
        result += '-';
        spaces += 1;
    }

    stars = 0;
    while(stars < (2 * i - (2 * row + 1))){
        result += '* ';
        stars += 1;
    }
    console.log(result);
    row += 1;
    x += 1;
}
