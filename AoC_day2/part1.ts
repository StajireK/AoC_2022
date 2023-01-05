const fs = require("fs");
const textByLine = fs.readFileSync("./AoC_day2/input.txt", "utf-8").split("\n");

const optionsMap = new Map<string, "rock" | "paper" | "scissors">([
    ["A", "rock"],
    ["B", "paper"],
    ["C", "scissors"],
    ["X", "rock"],
    ["Y", "paper"],
    ["Z", "scissors"]
]);

const bonusPointsMap = new Map<"rock" | "paper" | "scissors", number>([
    ["rock", 1],
    ["paper", 2],
    ["scissors", 3],
  ]);

let points = 0;

const getMatchesResult = () => {
    for (const round of textByLine) {
        const [opponent, me] = round.split(" ");        
        const opponentOption = optionsMap.get(opponent)!;
        const myOption = optionsMap.get(me)!;
    
        if (myOption === "rock" && opponentOption === "scissors") {
                points += 6;
                console.log("Win: ", opponentOption, myOption);
        }
        
        if (myOption === "paper" && opponentOption === "rock") {
                points += 6;
                console.log("Win: ", opponentOption, myOption);
        }
    
        if (myOption === "scissors" && opponentOption === "paper") {
                points += 6;
                console.log("Win: ", opponentOption, myOption);
        }
    
        if (myOption === opponentOption) {
            points += 3;
            console.log("Draw: ", opponentOption, myOption);
        }

        else {
            console.log("You loose, noob!: ", opponentOption, myOption)
        }
    
        points += bonusPointsMap.get(myOption) ?? 0;
    }
    
    return points;
}

console.log(getMatchesResult())
