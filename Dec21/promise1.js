/*
A promise essentially has four states:
1. pending
2. fulfilled
3. successful
4. rejected

In the code below if you call resolve function in newPromise, then 
the code flow will go to .then method 
else if you call reject method then code flow will go to .catch by knowing something has gone wrong
and finally code flow will go to .finally method


*/

const newPromise = new Promise((resolve, reject) => {
    resolve("some success");
    //reject("some error") // you can use this as well when needed if you put this then code flow will go to .catch method
});

console.log("first text in sync");
newPromise
    .then((result) => {
        console.log("successful: ", result);
    })
    .catch((error) => {
        console.log("failure: ", error);
    })
    .finally(() => {
        console.log("promise completed");
    });

console.log("last text sync");

/* Output :- 
first text in sync
last text sync
successful:  some success
promise completed
*/ 

/*
we will see the reject method call in newPromise

const newPromise = new Promise((resolve, reject) => {
    //resolve("some success");
    reject("some error") 
});

console.log("first text in sync");
newPromise
    .then((result) => {
        console.log("successful: ", result);
    })
    .catch((error) => {
        console.log("failure: ", error);
    })
    .finally(() => {
        console.log("promise completed");
    });

console.log("last text sync");

output: 
first text in sync
last text sync
failure:  some error
promise completed


*/