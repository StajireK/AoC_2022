const fs = require("fs");
const textByLine = fs.readFileSync("./AoC_day3/input.txt", "utf-8").split("\n");

let points = 0;
let arr = [];
let roundNumber = 0;

const getLettersMap = () => {
    let lettersValueArray = Array();
    let alphaText = 'abcdefghijklmnopqrstuvwxyz'
    let alphaTextUpper = alphaText.toUpperCase();

    let alphaLowerAndUpper = alphaText.concat(alphaTextUpper);

    let alphaJoined = Array.from(alphaLowerAndUpper)

    for (let letter in alphaJoined) {
        lettersValueArray.push([alphaJoined[letter], 1 + Number(letter)])
    }

    return lettersValueArray
}

const lettersValue = new Map<string, number>(getLettersMap())

const getNumbersValue = () => {
    for (const round of textByLine) {
        const roundArray = Object.assign([], round);
        const half = Math.ceil(roundArray.length / 2);

        const firstHalf = roundArray.slice(0, half)
        const secondHalf = roundArray.slice(half)

        const intersection = firstHalf.filter(remainingLetter => {
            return secondHalf.includes(remainingLetter);
          });
        
        let remainingLetterValue = lettersValue.get(intersection[0])

        points += remainingLetterValue!
    }

    return points
}

console.log(getNumbersValue())