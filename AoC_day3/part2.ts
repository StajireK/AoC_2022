export{}
const fs = require("fs");
const textByLine = fs.readFileSync("./AoC_day3/input.txt", "utf-8").split("\n");

let points = 0;

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

let lengthDividedByThree = (textByLine.length/3)

let arrayOfThree = Array();
let parsedLine = Array();


for (const line in textByLine) {
    parsedLine.push(Object.assign([], textByLine[line]))
}

for (var i = 0; i < lengthDividedByThree; i++) {
    const slicedArray = parsedLine.slice(0, 3);
    parsedLine.splice(0,3);
    arrayOfThree.push(slicedArray)
}

const getNumbersValue = () => {
    for (const trippleLine of arrayOfThree) {

        var result = trippleLine.shift().reduce(function(res, v) {
            if (res.indexOf(v) === -1 && trippleLine.every(function(a) {
                return a.indexOf(v) !== -1;
            })) res.push(v);
            return res;
        }, []);

        let remainingLetterValue = lettersValue.get(result[0])

        points += remainingLetterValue!
    }

    return points
}

console.log(getNumbersValue())