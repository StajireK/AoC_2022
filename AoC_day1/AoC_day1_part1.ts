var fs = require("fs");
var text = fs.readFileSync("./AoC_day1/input.txt", "utf-8");
var textByLine = text.split("\n")

var emptyArray = [];

while (indexToSplit !== -1) {
    var indexToSplit = textByLine.indexOf(''); // get index of empty item
    var slicedArray = textByLine.slice(0, indexToSplit); // creating new array with sliced numbers
    textByLine.splice(0,indexToSplit) // removing sliced array
    textByLine.shift() // removing first element (empty element)
    const arrOfNum = slicedArray.map(str => {
        return Number(str);
      }); // convert sting type to number
    var sum = arrOfNum.reduce((a, b) => a + b, 0); // sum of numbers in sliced arrays
    emptyArray.push(sum); // appending sum to new array
}
const max: number = Math.max(...emptyArray);
console.log(max)
