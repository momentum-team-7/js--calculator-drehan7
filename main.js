const equalButton = document.querySelector("#equal-sign");
const textArea = document.querySelector(".text-box");
const clearButton = document.querySelector("#clear");
const buttons = document.querySelectorAll(".button");


function insertNumber(number) {
    // textArea.value += number;
    if (textArea.value === '' && number === ".") {
        textArea.value = "0" + number;
    } else {
        textArea.value += number;
    }
}


function calculate(operation) {
    try {
        let answer = eval(operation);
        textArea.value = answer;
    }
    catch (e) {
        clearField();
    }
}


function clearField() {
    textArea.value = "";
}



for (let button of buttons) {
    button.addEventListener("click", e => {
        let number = e.target.value;
        insertNumber(number);
    })
}

equalButton.addEventListener("click", e => {
    let operation = textArea.value;
    calculate(operation);
})

clearButton.addEventListener("click", e => {
    clearField();
})

