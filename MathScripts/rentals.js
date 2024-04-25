"use strict";

var people = 38;
var seats = 15;
var rentals = 250;

var vansNeeded = Math.ceil(people / seats);
var total = vansNeeded * rentals;
var costPerPerson = total / people;

console.log("Number of vans needed is : " + vansNeeded + " Total cost is $" + total + " Cost per person: $" + costPerPerson.toFixed(2));
