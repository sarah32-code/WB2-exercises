var payRate = 17.30;
var hoursWorked = 45;
var grossPay;

// var overTimeHours;
// var overTimeRate = payRate * 1.5;
// var basePay = 40 * payRate;
// var overTimePay = overTimeHours * overTimeRate



if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked;
}
else {
    var regularHours = 40; 
    var overtimeHours = hoursWorked - regularHours; 
    var overTimeRate = payRate * 1.5; 
    var basePay = regularHours * payRate; 
    var overTimePay = overtimeHours * overTimeRate; 
    grossPay = basePay + overTimePay; 
}


    //grossPay = (40 * payRate) + ((hoursWorked - 40) * payRate * 1.5);



var message = "worked " + hoursWorked + " hours for $" + grossPay;

console.log(message);