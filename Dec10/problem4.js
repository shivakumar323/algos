/*
Given a string alphabets and characters and numbers replace every occurence of the word "pi" with 3.14

Note: don't use loop to solve the problem instead use recurssion
*/
let str = "abcdipiejipi";
let str_arr = str.split('');
function f(str_arr, ind) {
    if(ind == str_arr.length) {
        return;
    }

    if(str_arr[ind - 1] == 'p' && str_arr[ind] == 'i') {
        str_arr[ind - 1] = "3.";
        str_arr[ind] = "14";
    }

    f(str_arr, ind + 1);
    return str_arr;

}
console.log(f(str_arr, 1));