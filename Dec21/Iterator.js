function rangeItertor(begin = 0, end= Infinity, step = 1) {
    let nextIndex = begin;
    let IterationCount = 0;
    const Iterator = {
        next: function() {
            let result;
            if(nextIndex < end) {
                result = { value: nextIndex, done: false }
                nextIndex += step;
                IterationCount++;
                return result;
            }
            return { value: IterationCount, done: true }
        }
    };
    return Iterator;
}

const it = rangeItertor(1, 20, 3);
let response = it.next();

while(!response.done) {
    console.log(response.value);
    response = it.next();
}

/*
output: 
1
4
7
10
13
16
19
*/