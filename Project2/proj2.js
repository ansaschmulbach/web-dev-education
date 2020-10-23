var backspace = document.getElementById("backspace").querySelectorAll("button")[0]
var clear = document.getElementById("clear").querySelectorAll("button")[0]
var numbers = document.getElementsByClassName("numbers")
var operators = document.getElementsByClassName("operator")
var display = document.getElementById("display").querySelectorAll("p")[0]

var current = 0;
var lastOperation = "";

clear.addEventListener("click", function() {
    display.innerText = "0"
})

backspace.addEventListener("click", function() {
    if (parseInt(display.innerText) < 0) {
        display.innerText = Math.ceil(parseInt(display.innerText)/10)
    } else {
        display.innerText = Math.floor(parseInt(display.innerText)/10)
    }
})

for (let i = 0; i < operators.length; i++) {
    operators[i].querySelectorAll("button")[0].addEventListener("click",
        function(event) {
            display.innerText = calculate(parseInt(display.innerText))
            if (event.target.innerText === "=") {
                display.innerText = current
            }
            lastOperation = event.target.innerText
        })
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].querySelectorAll("button")[0].addEventListener("click",
        function(event) {
        if (display.innerText == 0) {
            display.innerText = ""
        }
        display.innerText += event.target.innerText
    })
}

function calculate(nextNum) {
    switch(lastOperation) {
        case "+":
            current += nextNum;
            return 0;
        case "-":
            current -= nextNum;
            return 0;
        case "×":
            current *= nextNum;
            return 0;
        case "÷":
            current /= nextNum;
            return 0;
        default:
            current = nextNum;
            return 0;
    }
}