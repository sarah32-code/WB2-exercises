// Description: This script tests various numeric conversion techniques
// Author: Sarah Newporgrammer 


var a = "101.1";
var b = "55";
var c = "402 Sarah";
var d = "Number 5";

var aParsedInt = parseInt(a);
var bParsedInt = parseInt(b);
var cParsedInt = parseInt(c);
var dParsedInt = parseInt(d);

var aParsedFloat = parseFloat(a);
var bParsedFloat = parseFloat(b);
var cParsedFloat = parseFloat(c);
var dParsedFloat = parseFloat(d);

var aNumber = Number(a);
var bNumber = Number(b);
var cNumber = Number(c);
var dNumber = Number(d);

var aUnaryPlus = +a;
var bUnaryPlus = +b;
var cUnaryPlus = +c;
var dUnaryPlus = +d;


console.log("parseInt: " );
console.log("a:", aParsedInt);
console.log("b:", bParsedInt);
console.log("c:", cParsedInt);
console.log("d:", dParsedInt);


console.log("parseFloat: ");
console.log("a:", aParsedFloat);
console.log("b:", bParsedFloat);
console.log("c:", cParsedFloat);
console.log("d:", dParsedFloat);


console.log("Number: ");
console.log("a:", aNumber);
console.log("b:", bNumber);
console.log("c:", cNumber);
console.log("d:", dNumber);


console.log(" Unary: ");
console.log("a:", aUnaryPlus);
console.log("b:", bUnaryPlus);
console.log("c:", cUnaryPlus);
console.log("d:", dUnaryPlus);






