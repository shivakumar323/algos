
function filter(array) {
    let newArraay = [];
    for(let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element != '' && element != null && element != undefined) {
            newArraay[newArraay.length] = element;
        }
    }
    return newArraay;
}

const array = [0, 1, null, 3, 4, undefined, 5, 6, ''];
console.log(filter(array));

/*output: 
[ 1, 3, 4, 5, 6 ]
*/