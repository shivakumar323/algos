// task queue continued

console.log("script start");

setTimeout( function() {
    console.log("set timeout");
}, 0);

Promise.resolve()
    .then(function() {
        return "promise1";
    })
    .then( function(txt) { // above function returned text "promise1" is getting passed here as txt
        console.log(txt);
    });

console.log("script end");

/*Output: 
script start
script end
promise1
set timeout
*/
