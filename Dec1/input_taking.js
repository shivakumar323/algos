// below code can be well understood by running the code in ideone.com(relevel's ide)
process.stdin.resume(); // This keeps on taking input till the time you stop it.
process.stdin.setEncoding('utf-8');

let inputString = ""; // this will store the entire input in stdin and we will later process it.
let currentLine = 0; // this will maintain the current line of input that we are considering.

process.stdin.on('data', function (userinput){ // it will be executed when user gives an input
    inputString += userinput;
    console.log(inputString);
});

process.stdin.on('end', function (){  // as soon as stdin stops taking input the end event hits
    inputString.trim(); // remove the teailing and leading spaces 
    inputString = inputString.split("\n"); // returns an array of strings where each index stores each line of input
    main();  // main logic
});

function readLine() {  // read a newline input from the array returned by split method of stdin end function
    let result = inputString[currentLine];
    currentLine += 1;
    return result;
}

function processArray(arr) {
    let result = [];
    let temp = arr.split(" ");
    for(let i = 0; i < temp.length; i++){
        result.push(Number(temp[i]));
    }
    return result;
}

function main(){
    // to be modified based on the question
    let t = Number(readLine()); 
    while(t > 0){
        let n = Number(readLine());
        let arr = readLine();
        arr = processArray(arr);
        console.log("Length of array is: ",n);
        console.log(arr);
        t -= 1;
    }
}

/* 2
5
1 2 3 4 5
3
1 2 3
*/