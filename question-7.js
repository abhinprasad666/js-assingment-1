// question -7
// find the square of each number in an array=[1,3,9,12,15,18,21] using loop

let numbers = [1, 3, 9, 12, 15, 18, 21];


const squares = [];

for (let i = 0; i < numbers.length; i++) {
 
    const square = numbers[i] ** 2;

    squares.push(square);
}


console.log("Original numbers:"+ numbers);
console.log("Squares of numbers:"+ squares);
