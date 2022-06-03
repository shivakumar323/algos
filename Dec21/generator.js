// we  will implement the iterator using generator

function* rangeItertor(begin = 0, end = Infinity, step = 1) { //* indicates this function is a generator function
    let IterationCount = 0;
    for(let i = begin; i < end; i += step) {
        IterationCount++;
        yield i; // yield stops the execution of function here and returns i 
    }
}

const it = rangeItertor(1, 20, 3);
let response = it.next();

while(!response.done) {
    console.log(response.value);
    response = it.next();
}

/*
output : 
1
4
7
10
13
16
19

*/