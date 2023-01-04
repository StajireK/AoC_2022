var fs = require("fs");
var text = fs.readFileSync("./AoC_day2/input.txt", "utf-8");
var textByLine = text.split("\n");

let rockMy = "X";
let paperMy = "Y";
let scissorsMy = "Z";

let rockHim = "A";
let paperHim = "B";
let scissorsHim = "C";

var emptyArray = [];
let splittedNumbers;
let points = 0;

for (let i = 0; i < textByLine.length; i++) {
    splittedNumbers = textByLine[i].split(" ");
    console.log("Him: ", splittedNumbers[0], "You: ", splittedNumbers[1])
    if (splittedNumbers[1] === rockMy) {
        if (splittedNumbers[0] === rockHim) {
            console.log("Draw, 3 + 1");
            points += 4;
        }
        if (splittedNumbers[0] === paperHim) {
            console.log("Lose, 0 + 1");
            points += 1;
        }
        if (splittedNumbers[0] === scissorsHim) {
            console.log("Win, 6 + 1");
            points += 7;
        }
    }
    if (splittedNumbers[1] === paperMy) {
        if (splittedNumbers[0] === rockHim) {
            console.log("Win, 6 + 2");
            points += 8;
        }
        if (splittedNumbers[0] === paperHim) {
            console.log("Draw, 3 + 2");
            points += 5;
        }
        if (splittedNumbers[0] === scissorsHim) {
            console.log("Lose, 0 + 2");
            points += 2;
        }
    }
    if (splittedNumbers[1] === scissorsMy) {
        if (splittedNumbers[0] === rockHim) {
            console.log("Lose, 0 + 3");
            points += 3;
        }
        if (splittedNumbers[0] === paperHim) {
            console.log("Lose, 6 + 3");
            points += 9;
        }
        if (splittedNumbers[0] === scissorsHim) {
            console.log("Draw, 3 + 3");
            points += 6;
        }
    }
}
console.log(points)