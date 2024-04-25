let hours = 45;
let rate = 10;
let weekly = hours * rate;

let pay = weekly * 45;

let filingStatus = "Single";

let taxRate;

if (filingStatus === "Single") {
    if (pay <= 12000) {
        taxRate = 0.0;
    } else if (pay >= 12000 && pay <= 24999.99) {
        taxRate = 0.10;
    } else if (pay >= 25000 && pay <= 74999.99) {
        taxRate = 0.15;
    } else {
        taxRate = 0.20;
    }
} else if (filingStatus === "Joint") {
    if (pay <= 12000) {
        taxRate = 0.0;
    } else if (pay >= 12000 && pay <= 24999.99) {
        taxRate = 0.06;
    } else if (pay >= 25000 && pay <= 74999.99) {
        taxRate = 0.11;
    } else {
        taxRate = 0.20;
    }
}

let federalTax = pay * taxRate;

let tax = federalTax / 45; 

const netPay = weekly - tax; 

console.log(`You worked ${hours} hours this period. Because you earn $${rate.toFixed(2)} per hour, your gross pay is $${weekly.toFixed(2)}.`);
console.log(`Your filing status is ${filingStatus}.`);
console.log(`Your tax withholdings this period is $${tax.toFixed(2)}.`);
console.log(`Your net pay is $${netPay.toFixed(2)}.`);
