//find fibonacci number using recurssion
function fun(n) {
    if(n == 0 || n == 1){
        return n;
    } 
    else {
        return fun(n - 1) + fun(n - 2);
    }
}