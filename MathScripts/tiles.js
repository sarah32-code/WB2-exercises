"use strict";

var length = 6;  
var width = 5; 
var box = 121; 
var extra = 0.10; 

var area = length * width;

area = area + (area * extra);
var boxesNeeded = Math.ceil(area / box);

console.log("You need to buy " + boxesNeeded);
