 (function() {
    "use strict";
   // $Clear.removeEventListener("click", once);
  // $Clear.addEventListener("click", once);
 
 // const $screen = document.querySelector('.calculator-screen');

 // select the buttons of the html page
  const $numbers = document.querySelectorAll('.number');
  const $operators = document.querySelectorAll('.operator');
  const $clear = document.querySelector('.clear');
  const $plusminus = document.querySelector('.plus-minus');
  const $percent = document.querySelector('.percent');
  const $log = document.querySelector('.number btn-lg');
  const $decimal = document.querySelector('.decimal');
  const $equalsign = document.querySelector('.equal-sign');
  var calculation = [];

//   Define a function named `pushNumber` that `alert()`s the number associated with its event argument 
//  when called; add this function as an event listener for the number buttons
//functions

function calculate(event) {
 console.log(event.target.value)
 }

 function calculates(event){
  console.log(event.target.value);
 }

function pushNumber(event) {
  calculation.push(event.target.value)
  console.log(calculation)

  }
   
  function pushOperator(event) {
    console.log(event.target.value)
  }
 
//alerts

 $numbers.forEach(function(element){
    element.addEventListener('click', pushNumber)
})


$operators.forEach(function(element){
    element.addEventListener('click', pushOperator)
})

$equalsign.addEventListener('click', calculate)

$clear.addEventListener('click',calculates)

   

//

function calculate(){
  console.log("you clicked the equal sign");

  let num1 =""
  let num2 =""
  let operators; 
   operators = ["*", "/", "+" , "-", "c"];

  for (let i=0; i < calculation.length; i++) {
      let ops = calculation[i];

      if (operators.includes (ops)) {
      } 
      else if (!operators) {
 
              num1 += ops; }
 else {
  num2 += ops;
  
      }
  }
  num1 = parseFloat
  num2 = parseFloat

  if ( operators === "+"){
      alert ( num1 + num2) //etc for each operator
}
  if ( operators === "-"){
  alert ( num1 - num2)
}
if ( operators === "/"){
  alert ( num1 / num2)
}
if ( operators === "*"){
  alert ( num1 * num2)
}
if ( operators === "c"){
  alert (clear)
}
}

  

  //displayValue string value that represents the input 
  //firstOperand will store the first operand for any expression
  //operator key will store the operator for an expression  
  //waitingForSecondOperand heck if both the first operand and the operator have been input

  //function updateDisplay() {
  //  const $screen = document.querySelector('.calculator-screen');
  //  $screen.value = calculator.displayValue;
  
  
  //updateDisplay();









})(); 