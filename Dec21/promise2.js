// task queue

console.log("script start");

setTimeout( function() {
    console.log("set timeout");
}, 0);

Promise.resolve()
    .then(function() {
        console.log("promise1");
    })
    .then( function() {
        console.log("promise2");
    });

console.log("script end");

/*output: 
script start
script end
promise1
promise2
set timeout
*/

/*
Note: the reason for getting promises executing first or 
getting iy above the set timeout is, in js there will be two queue's
namely macro tasks queue and micro tasks queue
after executing the code which is native to js, the tasks which are loaded
in micro tasks queue is executed  and then macro tasks queue is executed

promises will be moved to micro tasks queue and set timeout function will be moved to 
macro tasks queue
*/