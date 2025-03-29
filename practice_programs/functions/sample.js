// function sample(number) {
//     let number1 = 8;
//     let sum = number + number1;
//     console.log(sum);
//     return sum;
// }

// let sum = 9;
// total = sum + sample(5);
// console.log(total);

function operation() {
    const additionResult = addition(1,2);
    const subtractionResult = subtraction(8,5);
    const result = additionResult + subtractionResult;
    return result;
}

function addition(number1,number2) {
    const result = number1 + number2;
    return result;
}

function subtraction(number1,number2) {
    const result = number1 - number2;
    return result;
}

const operationResult = operation();
console.log(operationResult);




