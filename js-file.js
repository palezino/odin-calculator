//operator functions
function add(num1, num2) {
    return num1 + num2;
}
  
function subtract(num1, num2) {
    return num1 - num2;
}
  
function multiply(num1, num2) {
    return num1 * num2;
}
  
function divide(num1, num2) {
    return num1 / num2;
}

//take an operator and two number and call for appropriate function above
function operate(op, num1, num2) {
    if (op === "add") {
      return add(num1, num2);
    } else if (op === "subtract") {
      return subtract(num1, num2);
    } else if (op === "multiply") {
      return multiply(num1, num2);
    } else if (op === "divide") {
      return divide(num1, num2);
    }
}


function showNumbers(e) {
    let numDisplay = document.querySelector(".display")
    console.log(numDisplay.innerText)
    return numDisplay.innerText += e.target.innerText
}
//let numDisplay = document.querySelector(".display")


let btns = document.querySelectorAll(".num-buttons")
btns.forEach(btn => btn.addEventListener("click", showNumbers));
//console.log(displayValue)
let displayValue = numDisplay.innerText;