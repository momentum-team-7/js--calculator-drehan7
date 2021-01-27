const equalButton = document.querySelector("#equal-sign");
const textArea = document.querySelector(".text-box");
const clearButton = document.querySelector("#clear");
const button = document.querySelectorAll(".button");


function insertNumber(number) {
    // textArea.value += number;
    if (textArea.value === '0') {
        textArea.value = number;
    } else {
        textArea.value += number;
    }
}


function calculate(operation) {
    let answer = eval(operation);
    textArea.value = answer;
}


function clearField() {
    textArea.value = 0;
}




equalButton.addEventListener("click", e => {
    let operation = textArea.value;
    console.log(operation);
    calculate(operation);
})

clearButton.addEventListener("click", e => {
    clearField();
})

