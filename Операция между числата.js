function operationBetweenNumber(firstNumber, secondNumber, operation) {
    let result = 0;

    if (operation == "+") {
        result = firstNumber + secondNumber;
        if (result % 2 == 0) {
            console.log(`${firstNumber} + ${secondNumber} = ${result} - even`);
        }
        else {
            console.log(`${firstNumber} + ${secondNumber} = ${result} - odd`);
        }
    }
    else if (operation == "-") {
        result = firstNumber - secondNumber;
        if (result % 2 == 0) {
            console.log(`${firstNumber} - ${secondNumber} = ${result} - even`);
        }
        else {
            console.log(`${firstNumber} - ${secondNumber} = ${result} - odd`);
        }
    }
    else if (operation == "*") {
        result = firstNumber * secondNumber;
        if (result % 2 == 0) {
            console.log(`${firstNumber} * ${secondNumber} = ${result} - even`);
        }
        else {
            console.log(`${firstNumber} * ${secondNumber} = ${result} - odd`);
        }
    }
    else if (operation == "/") {
        result = firstNumber / secondNumber;
        if (secondNumber == 0) {
            console.log(`Cannot divide ${firstNumber} by zero!`);
        }
        else {
            console.log(`${firstNumber} + ${secondNumber} = ${result}`);
        }
    }
    else if (operation == "%") {
        result = firstNumber % secondNumber;
        if (secondNumber == 0) {
            console.log(`Cannot divide ${firstNumber} by zero!`);
        }
        else {
            console.log(`${firstNumber} % ${secondNumber} = ${result}`);
        }
    }
}

operationBetweenNumber(
    10,
    3,
    "%"
)