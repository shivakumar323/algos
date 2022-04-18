let max_teams = 30;
let start = 0;
let end = 6;
let batsmen = ["Ravindra Jadeja", "Shubman Gill", "Robin Uthappa", "Abhinav Manohar", "Ruturaj Gaikwad", "David Miller", "Moeen Ali", "Rahul Tewatia", "Shivam Dube", "Dwayne Bravo"];
//let batsmen = [0,1,2,3,4,5,6,7,8,9];
let team = 0;
let teams = [];
while(team < max_teams) {
    if(start >= batsmen.length) {
        start = 0;
    }
    if(end >= batsmen.length) {
        end = 0;
    }
    
    let teamname = "Team" + team;
    let players = []
    if(start < end) {
        for(let i = start; i <= end; i++) {
            players.push(batsmen[i]);
        }
    }
    if(start > end) {
        for(let i = start; i < batsmen.length; i++) {
            players.push(batsmen[i]);
        }
        for(let j = 0; j <= end; j++) {
            players.push(batsmen[j]);
        }
    }
    start++;
    end++;
    teams.push(teamname + ":" + players);
    team++;
}

console.log(teams);