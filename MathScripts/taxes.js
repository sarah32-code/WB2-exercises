"use strict";
// taxes = 23%
//total = salary + tax

var tax = 0.23;
var salary = 100;

var totalTaxed = salary * tax;
var total = salary + totalTaxed;

console.log("The total tax is " + total.toFixed(2))
