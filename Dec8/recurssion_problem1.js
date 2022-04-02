//important question - very useful in programming journey
//Given a string, calculate and print all possible subsequencs
//of the string recursively
//hint - how do you generate all the possible subsets of a given set
//hint2 - if a set has n number of elements then there will be 2 to the power of n subsets

/*
apprach:-
we have two choices : 1. we can include the element in the current subset 
                      2. we can exclude the element in the current subset
so each element has a 2 choices of getting choosen i.e., included or excluded
so no of possible subsets will be 2^n where n = no of elements of a string

let us consider the string is "c"
then all the possible subsets will be "" and "c"
now if the string is "bc"
then all the possible subsets will be "", "c", "b", "bc".
in the string "bc" example what we did is for "c" we already knew the subsets are "" and "c"
as we already know all the possible subsets of "c" now for "bc" we can either include or exclude
b to all the possible subsets of "c" i.e., we can either include or exclude b to "" and "c"
  =) if we exclude it will be "" and "c"
     if we include it will be "b" and "bc"

     so all the possible subsets will be "", "c", "b", "bc"  // here n = 2 so the no of subsets = 2^2 = 4

now let string = "abc"
by using above logic we can either include or exclude a to all the subsets of "bc"
i.e., we can include or exclude a to "", "c", "b", "bc"
  =) if we exclude then "", "c", "b", "bc"
     if we include then "a", "ac", "ab", "abc"

    so total possible subsets will be "", "c", "b", "bc", "a", "ac", "ab", "abc" // here n = 3 so the no of subsets = 2^3 = 8

*/
/*
base case - for empty string "", all the possible subsets will be "" itself
*/

function f(str, output) { // str  = "abc", output = ""
    if(str == "") {
        console.log(output);
        return;
    }
    
    let ch = str[0]; //a
    let restOfTheString = str.substring(1); // bc
    f(restOfTheString, output + ch); // including the character(output + ch)
    f(restOfTheString, output); // excluding the character(output)
}

f("abc", "");

/*
1.f(ab, "")
ch = a
ros = b
    f(b,a)
    ch = b
    ros = ""
        f("", ab)
            print ab
        f("", a)
            print a
    f(b,"")
    ch = b
    ros = ""
        f("", b)
            print(b)
        f("", "")
            print ""
    
*/

