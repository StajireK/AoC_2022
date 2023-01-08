export{}
const fs = require("fs");
const textByLine = fs.readFileSync("./AoC_day4/input.txt", "utf-8").split("\n");

let numbersArray = Array.from({length: 100}, (_, i) => i + 1)

let notNeededPair = 0;

const getArrays = () => {
    for (const line of textByLine) {
        let splittedLine = line.split(",");
        let firstElve = splittedLine[0].split("-");
        let secondElve = splittedLine[1].split("-");

        const firstNumbers = numbersArray.slice((firstElve[0] - 1 ), (firstElve[1]))
        const secondNumbers = numbersArray.slice((secondElve[0] -1 ), (secondElve[1]))

        const intersection = firstNumbers.filter(remainingNumber => {
            return secondNumbers.includes(remainingNumber);
          });
        
        if (intersection.length > 0) {
            notNeededPair += 1;
        }
    }
    return notNeededPair
}

console.log(getArrays())