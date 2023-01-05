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
        let myOption = optionsMap.get(me)!;
        let myNewOption;
        console.log("Points before round: ", points)
        console.log("Before ", opponentOption, myOption)

        if (myOption === "rock") { // need to loose this match

            if (opponentOption === "rock") {
                myNewOption = optionsMap.get("Z")!;
                console.log("Loose: ", opponentOption, myOption)
            }

            if (opponentOption === "paper") {
                myNewOption = optionsMap.get("X")!;
                console.log("Loose: ", opponentOption, myOption)
            }

            if (opponentOption === "scissors") {
                myNewOption = optionsMap.get("Y")!;
                console.log("Loose: ", opponentOption, myOption)
            }
        }

        if (myOption === "paper") { // need to draw this match
            if (opponentOption === "rock" || opponentOption === "paper" || opponentOption === "scissors") {
                myNewOption = optionsMap.get(opponent)!;
                console.log("Draw: ", opponentOption, myOption)
            }
            points += 3;
        }

        if (myOption === "scissors") { // need to win this match

            if (opponentOption === "rock") {
                myNewOption = optionsMap.get("Y")!;
                console.log("Win: ", opponentOption, myOption)
            }

            if (opponentOption === "paper") {
                myNewOption = optionsMap.get("Z")!;
                console.log("Win: ", opponentOption, myOption)

            }

            if (opponentOption === "scissors") {
                myNewOption = optionsMap.get("X")!;
                console.log("Win: ", opponentOption, myOption)
            }
            points += 6
        }

        points += bonusPointsMap.get(myNewOption) ?? 0;

    }
    return points;
}

console.log(getMatchesResult())