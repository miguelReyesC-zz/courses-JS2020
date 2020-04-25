const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return +userInput.value;
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: "ADD",
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function substract() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
