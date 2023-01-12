 (function() {
    "use strict";
  
  
  let $screen = document.querySelector('.calculator-screen');
  let $numbers = document.querySelectorAll('.number');
  let $operators = document.querySelectorAll('.operator');
  let $clear = document.querySelector('.clear');
  let $plusminus = document.querySelector('.plus-minus');
  let $percent = document.querySelector('.percent');
  let $log = document.querySelector('.number btn-lg');
  let $decimal = document.querySelector('.decimal');
  let $equalsign = document.querySelector('.equal-sign');
  let calculation = [];

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
//const calculator = new Calculator( previousOperand, cusrrentOperand )

$numbers.forEach(function(element){
    element.addEventListener('click', pushNumber)
})
$operators.forEach(function(element){
    element.addEventListener('click', pushOperator)
})
$equalsign.addEventListener('click', calculate)
$clear.addEventListener('click',calculates)

}); 

