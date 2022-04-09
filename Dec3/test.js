let x1 = 7; 
let y1 = 7;

let x = 3; 
let y = 4;
let y2 = y;
let y3 = y;
y4 = y;

let A = [];
A.push(x);
A.push(y);
A.push(' ');
for(let j = x - 1; j >= 0; j--) {
    
    y3 -= 1;
    if(y3 >= 0) {
        A.push(j);
        A.push(y3);
        A.push(' ');
    }
    
    
    y4 += 1;
    if(y4 <= x1) {
        A.push(j);
        A.push(y4);
        A.push(' ');
    }
    
}

for(let i = x + 1; i <= x1; i++) {

    y += 1;
    if(y <= x1) {
        A.push(i);
        A.push(y);
        A.push(' ');
    }
    
    
    y2 -= 1;
    if(y2 >= 0) {
        A.push(i);
        A.push(y2);
        A.push(' ');
    }
    

}

console.log(A);
