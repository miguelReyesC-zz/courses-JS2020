const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return +userInput.value;
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);

}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
