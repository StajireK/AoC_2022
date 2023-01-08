export{}
const fs = require("fs");
const textByLine = fs.readFileSync("./AoC_day4/input.txt", "utf-8").split("\n");

let notNeededPair = 0;

const getArrays = () => {
    for (const line of textByLine) {
        let splittedLine = line.split(",");
        let firstElve = splittedLine[0].split("-");
        let secondElve = splittedLine[1].split("-");
        if ((Number(firstElve[0]) >= Number(secondElve[0]) && Number(firstElve[1]) <= Number(secondElve[1])) || (Number(firstElve[1]) >= Number(secondElve[1]) && Number(firstElve[0]) <= Number(secondElve[0]))){
            notNeededPair += 1;
        }
    }
    return notNeededPair
}

console.log(getArrays())