 (function() {
    "use strict";
   // $Clear.removeEventListener("click", once);
  // $Clear.addEventListener("click", once);
 
  let $screen = document.querySelector('.calculator-screen');
  let $numbers = document.querySelectorAll('.number , .operator');
  let $clear = document.querySelector('.clear');
  let $plusminus = document.querySelector('.plus-minus');
  let $percent = document.querySelector('.percent');
  let $log = document.querySelector('.number btn-lg');
  let $decimal = document.querySelector('.decimal');
  let $equalsign = document.querySelector('.equal-sign');

  $numbers.forEach(function(pushNumber) {
     pushNumber.addEventListener('alert', function(e) {
        let value = e.target.value
        $screen.value += value;
     })
  })
  








})(); 