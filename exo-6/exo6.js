// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
//
// console.log(`Joe has ${joeInfo["cars"].length} cars`);
//
// // 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
//
// joeInfo["bathrooms"] = 1;
// console.log(`Joe has ${joeInfo["bathrooms"]} bathroom`);
//
// // 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
//
// joeInfo["garage"] = true;
// if (joeInfo["garage"]){
// console.log('Joe has a garage');}

let team = {
    players: [
        {
            firstName: ["Oliver"],
            lastName: ["Kahn"],
            age: [55]
        }],
    games: [{
        opponent: ["Real Madrid"],
        teamPoints: [5],
        opponentPoints: [0],
    }],
    addPlayer(firstName, lastName, age) {
        // Create a new player object
        let player = {
            firstName: [firstName],
            lastName: [lastName],
            age: [age]
        }
        // Push the player object into the players array
        this.players.push(player);
    },
    addGames(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: [opponent],
            teamPoints: [teamPoints],
            opponentPoints: [opponentPoints]
        }
        this.games.push(game);
    }

}

team.addPlayer("Andrei", "Shevchenko", 47);
team.addPlayer("Xavi", "Hernandez", 44);
team.addPlayer("Cris", "Marques Gomes", 47);
team.addPlayer("Michel", "Platini", 69);

team.addGames("Manchester United", 3, 3);
team.addGames("Inter Milan", 2, 1);
team.addGames("Stade Brestois", 0, 7);

console.log(team.players);
console.log(team.games);

let totalTeamPoints = 0;

// Iterate over each game using a for loop
for (let i = 0; i < team.games.length; i++) {
    let game = team.games[i];

    // Iterate over the teamPoints array of the current game using another for loop
    for (let j = 0; j < game.teamPoints.length; j++) {
        totalTeamPoints += game.teamPoints[j];
    }
}

console.log("The total of the team points are :" + totalTeamPoints);


// let totalTeamPoints = team.games.reduce((acc, game) => {
//     return acc + game.teamPoints.reduce((sum, points) => sum + points, 0);
// }, 0);
//
// console.log(totalTeamPoints); // Outputs the total points from all games
let totalOpponentPoints = 0;

let numberOfGames = 0;

for (let i = 0; i < team.games.length; i++) {
    numberOfGames ++;
}

for (let i = 0; i < team.games.length; i++) {
    let game = team.games[i];
    for (let j = 0; j < game.opponentPoints.length; j++) {
        totalOpponentPoints += game.opponentPoints[j];
    }
}

console.log("Number of games: " + numberOfGames);
console.log("The total of the opponent points are :" + totalOpponentPoints);

let opponentAveragePoints = totalOpponentPoints / numberOfGames;

console.log("The average of the opponent points are : " + opponentAveragePoints);

let oldestPlayer = team.players[0];

function getTheOldestPlayer(){
    for (let i = 0; i < team.players.length; i++) {
        let player = team.players[i];
        if (player.age > oldestPlayer.age) {
            return oldestPlayer = player;
        }
    }
}
getTheOldestPlayer();
console.log("The oldest player is " + oldestPlayer.firstName + " " + oldestPlayer.lastName);

// let oldestPlayer = team.players.reduce((oldest, player) => {
//     return (player.age > oldest.age) ? player : oldest;
// }, team.players[0]);
//
// console.log(oldestPlayer);

team.players.sort((a,b) => {
    if (a.lastName < b.lastName) {
        return -1;
    }
    if (a.lastName > b.lastName) {
        return 1;
    }
    return 0;
});

console.log(team.players);