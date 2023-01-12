(function () {
  "use strict";
  // thik about how to get clear button to work 

  const $screen = document.querySelector(".calculator-screen");
  const $numbers = document.querySelectorAll(".number");
  const $operators = document.querySelectorAll(".operator");
  const $clear = document.querySelector(".clear");
  const $plusminus = document.querySelector(".plus-minus");
  const $percent = document.querySelector(".percent");
  const $log = document.querySelector(".number btn-lg");
  const $decimal = document.querySelector(".decimal");
  const $equalsign = document.querySelector(".equal-sign");
  let calculation = [];
  

  //output1 = parseInt
  //output2 = parseInt

  let displayValue = "";

  //var operations = 'null'

  //   Define a function named `pushNumber` that `alert()`s the number associated with its event argument
  //  when called; add this function as an event listener for the number buttons
  //functions

  function calculate(event) {
    let num1 = "";
    let num2 = "";
    let operator = null;
    let operators = ["+", "-", "*", "/","C" ];
    // let clearValue = "0";

    // ['3','3','+', '2']

    for (let i = 0; i < calculation.length; i++) {
      const value = calculation[i];
      if (operators.includes(value)) {
        operator = value;
      } else if (operator === null) {
        num1 += value;
      } else {
        num2 += value;
      }
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
   

    let result;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } 

    displayValue = "";
    $screen.value = result;
    calculation = [];
    displayValue = "";

  }

  function clear(event) {
    calculation = [];
    displayValue = "";
    $screen.value = '0'
  
    
  }

  function pushNumber(event) {
    calculation.push(event.target.value);
    displayValue += event.target.value;
    $screen.value = displayValue;
  }

  function pushOperator(event) {
    calculation.push(event.target.value);
    displayValue = "";

  }

  //const calculator = new Calculator( previousOperand, cusrrentOperand )

  $numbers.forEach(function (element) {
    element.addEventListener("click", pushNumber);
  });

  $operators.forEach(function (element) {
    element.addEventListener("click", pushOperator);
  });

  $equalsign.addEventListener("click", calculate);

  $clear.addEventListener("click", clear);

  //mathOperations
  /*function calculate (){
  console.log("equal sign was presse");



}*/
})();
