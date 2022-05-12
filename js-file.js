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

//display the input
function showNumbers(e) {
    // let numDisplay = document.querySelector(".display")
    // console.log(numDisplay.innerText)
    numDisplay.innerText += e.target.innerText
}

//clear display
function clear() {
    numDisplay.innerText = '';
}

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);

//main function

function giveSecondValue() {
  numDisplay.innerText = '';
  let num2 = numDisplay.innerText;
  return num2;
}

//Step1: take the first number and operator
let multiplyBtn = document.querySelector('.multiply');
let numDisplay = document.querySelector(".display");
let equalBtn = document.querySelector('.equal');

const displArr = {};
console.log(displArr);
multiplyBtn.addEventListener('click', (e) => {
  displArr['num1'] = numDisplay.innerText;
  displArr['operator'] = e.target.className.slice(4);
  clear();
  console.log(displArr);
});

//Step2: take the second number and show the answer
equalBtn.addEventListener('click', () => {
  displArr['num2'] = numDisplay.innerText;
  console.log(displArr);
  numDisplay.innerText = operate(displArr['operator'], displArr['num1'], displArr['num2']);
  console.log(operate(displArr['operator'], displArr['num1'], displArr['num2']));
})



// let num2 = displayValue.innerText;


let ops = document.querySelectorAll('.ops');


let numBtns = document.querySelectorAll(".num-btns");
numBtns.forEach(btn => btn.addEventListener("click", showNumbers));

// let displayValue = numDisplay.innerText;

// let valueNum1 = multiplyBtn.addEventListener('click', saveValue);

// console.log()