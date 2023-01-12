 (function() {
    "use strict";
  
  
  const $screen = document.querySelector('.calculator-screen');
  const $numbers = document.querySelectorAll('.number');
  const $operators = document.querySelectorAll('.operator');
  const $clear = document.querySelector('.clear');
  const $plusminus = document.querySelector('.plus-minus');
  const $percent = document.querySelector('.percent');
  const $log = document.querySelector('.number btn-lg');
  const $decimal = document.querySelector('.decimal');
  const $equalsign = document.querySelector('.equal-sign');
  const calculation = [];

  var output1 = ''
  var output2=''
  var operators;
  operators = ['+', '-', '*', '/', '=', 'c']
  var operations = clculation[i]


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

 


//mathOperations
function calculate (){
  console.log("equal sign was presse");



}

});