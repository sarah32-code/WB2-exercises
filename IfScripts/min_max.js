let a = 1;
let b = 2;
let c = 3;

let smallest = a;
if (b < smallest) {
    smallest = b;
}
if (c < smallest) {
    smallest = c;
}

let largest = a;
if (b > largest) {
    largest = b;
}
if (c > largest) {
    largest = c;
}

console.log("Smallest number: " + smallest);
console.log("Largest number: " + largest);
