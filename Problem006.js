

var sumSquare = 0;
var squareSum = 0;

for (let i = 1; i < 101; i++){
    sumSquare += i**2
    squareSum += i;
}

squareSum *= squareSum;

console.log(squareSum - sumSquare);