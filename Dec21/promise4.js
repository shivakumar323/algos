// Promise.all

const databasePromise = connectDB();

const menuPromise = databasePromise
    .then(findMenu);
const userPromise = databasePromise
    .then(findUser);

Promise.all([
    menuPromise,
    userPromise
])
    .then(([menu, user]) => suggestItems(menu, user)); // here promise.all method has returned array of results of promises  
