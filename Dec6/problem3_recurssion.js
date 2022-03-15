//finding factorial using recurssion
function fun(x) {
    if(x == 1) {
        return 1;
    }
    else {
        return x * fun(x - 1);
    }
}