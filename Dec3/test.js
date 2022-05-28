process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

let inputString = "";

process.stdin.on("data", function(userInput) {
    inputString += userInput;
});

process.stdin.on("end", function(x) {
    inputString.trim();
    inputString = inputString.split('\n');
    main();
});

let currentLine = 0;

function readLine() {
    let result = inputString[currentLine];
    currentLine++;
    return result;
}

function processArray(arr) {
    let resut = [];
    let temp = arr.split(' ');
    for(let i = 0; i < temp.length; i++) {
        resut.push(Number(temp[i]));
    }
    return resut;
}

function main() {
    let N = processArray(readLine());
    let players = processArray(readLine());
    let pairs = {};
    let max_players = "";
    for(let i = 0; i < N[1]; i++) {
        let pair = processArray(readLine());
        pairs[pair[0]] = pair[1];
        pairs[pair[1]] = pair[0];
    }
    
    for(let j = 0; j < players.length; j++) {
        let cur_player = players[j];
        let count = 0;
        for(let k = 0; k < players.length; k++) {
            if(k != j) {
                if(players[j] > players[k]) {
                    if(pairs[j + 1] != k + 1) {
                        count++;
                    }
                }
            }
        }
        max_players += count + " ";
        //max_players += " ";
    }
    console.log(max_players);
}



