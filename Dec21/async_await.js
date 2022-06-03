// async/await in js
/*in previous examples we learnt about call backs and promises
now, we will learn about async/await which is more efficient way of writing promises

consider an example where a requirement is to return streetAddress, city, state and zip
let us assume that methods are already written or promises are already defined
we would have written promises in a below fashion assuming getstreetAddresspromise, getcitypromise, getstatepromise and getxippromise as an independent tasks

promises code will look as:
Promise.all([getStreetAddressPromise, getCityPromise, getStatePromise, getZipCodePromise])
    .then(([streetAddress, city, state, zip]) => {
        return `${streetAddress}, ${city}, ${state}, ${zip}`
    })

*/

/*
The above promise can be implemented usiing async/await in a below way 
*/
async function getAddress() { // when you add async in front of function then function will return promise
    const streetAddress = await getStreetAddress()
    const city = await getCity() // await is similar to .then in promise it asks to wait until getCity() method is executed, after completion of getCity() only flow should go to next line(which is asynchronous in nature) 
    const state = await getState()
    const zip = await getZipCode()
    return `{$streetAddress}, {$city}, {$state}, {z$ip}`
}